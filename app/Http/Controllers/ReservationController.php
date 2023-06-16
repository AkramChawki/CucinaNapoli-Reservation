<?php

namespace App\Http\Controllers;

use App\Mail\ReservationSummary;
use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ReservationController extends Controller
{

    public function index()
    {
        return Inertia::render('Reservation/History', [
            "reservations" => auth()->user()->reservations()->get(),
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            "nom" => "required",
            "prenom" => "required",
            "telephone" => "required",
            "email" => "required|email",
            "adults" => "required",
            "childs" => "required",
            "date" => "required",
            "time" => "required",
            "notes" => "required",
        ]);

        $account = null;
        $score = 0;

        if (auth()->user()) {
            $account = auth()->user();
            $account->update([
                "telephone" => $request->telephone,
                "adress" => $request->adress,
            ]);
        } elseif ($request->create_account) {
            $account = User::where('email', request('email'))->firstOr(function () use ($request) {
                return User::create([
                    'name' => $request->nom . " " . $request->prenom,
                    "nom" => $request->nom,
                    "prenom" => $request->prenom,
                    "telephone" => $request->telephone,
                    "adress" => $request->adress,
                    'email' => $request->email,
                    'password' => Hash::make($request->telephone),
                ]);
            });
        }

        if ($account) {
            $account->update([
                "points" => $account->points + 10
            ]);
            Auth::login($account);
        }
        

        $reservation = new Reservation();
        $reservation->nom = $request->nom;
        $reservation->prenom = $request->prenom;
        $reservation->telephone = $request->telephone;
        $reservation->email = $request->email;
        $reservation->adults = $request->adults;
        $reservation->childs = $request->childs;
        $reservation->date = $request->date;
        $reservation->time = $request->time;
        $reservation->notes = $request->notes;
        $reservation->user_id = $account->id ?? null;
        DB::beginTransaction();

        $id = DB::table('numbers')->latest('id')->first();

        DB::table('numbers')->insert([
            'id' => $id->id + 1,
            'number' => $reservation->telephone,
        ]);

        $reservation->save();
        DB::commit();

        Mail::to($request->email)->send(new ReservationSummary($reservation));

        return redirect("/Reservation/Merci");
    }

    public function show($num)
    {

        return Inertia::render('Reservation/Details');
    }
}
