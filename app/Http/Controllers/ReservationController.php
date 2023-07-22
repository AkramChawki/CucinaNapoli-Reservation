<?php

namespace App\Http\Controllers;

use App\Mail\ReservationSummary;
use App\Mail\WelcomeMail;
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
            'selectedDate' => 'required|date_format:Y-m-d H:i:s',
            "restau" => "required",
            "notes" => "nullable",
        ]);

        $account = null;

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
            Auth::login($account);
        }
        
        $reservation = new Reservation();
        $reservation->nom = $request->nom;
        $reservation->prenom = $request->prenom;
        $reservation->telephone = $request->telephone;
        $reservation->email = $request->email;
        $reservation->adults = $request->adults;
        $reservation->childs = $request->childs;
        $reservation->selectedDate = $request->selectedDate;
        $reservation->restau = $request->restau;
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

        if ($reservation->restau == "anoual") {
            Mail::to($request->email)->send(new ReservationSummary($reservation));
            Mail::to($request->email)->send(new WelcomeMail());
            Mail::to("anoual@reservation.cucinanapoli.com")->send(new ReservationSummary($reservation));
        } else {
            Mail::to($request->email)->send(new ReservationSummary($reservation));
            Mail::to($request->email)->send(new WelcomeMail());
            Mail::to("palmier@reservation.cucinanapoli.com")->send(new ReservationSummary($reservation));
        }
        
        

        return redirect("/Reservation/Merci");
    }

    public function show($num)
    {

        return Inertia::render('Reservation/Details');
    }
}
