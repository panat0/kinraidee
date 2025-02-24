<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailySummary extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'goal_calories',
        'total_calories_consumed',
        'calories_difference',
    ];
}
