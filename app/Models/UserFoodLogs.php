<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserFoodLogs extends Model
{
    protected $fillable = [
        'user_id',
        'food_id',
        'catagory_id',
        'servings',
        'total_calories',
        'date'
    ];
}
