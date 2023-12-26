<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/test', function () {
    return Inertia::render('Test');
});
Route::get('/reservation', function () {
    return Inertia::render('Reservation', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::post('/reservation', [\App\Http\Controllers\ReservationController::class, "store"]);

Route::middleware('auth')->group(function () {
    Route::get("/profile", function () {
        return Inertia::render("Profile/Index", [
            "coupons" => auth()->user()->coupons,
            "reservations_count" => auth()->user()->reservations()->count()
        ]);
    })->name("profile");
    Route::post('/profile/coupon', [\App\Http\Controllers\ProfileController::class, "createCoupon"]);
    Route::get("/profile/reservation/history", [\App\Http\Controllers\ReservationController::class, "index"]);
});


Route::inertia('/Reservation/Merci', "Reservation/Merci")->name("merci");
require __DIR__ . '/auth.php';
