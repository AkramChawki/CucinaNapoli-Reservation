<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'telephone',
        'email',
        'adults',
        'childs',
        'selectedDate',
        'restau',
        'notes',
        'confirmed',
        'user_id',
    ];

}
