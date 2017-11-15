<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Social_Accounts extends Model
{
    protected $fillable = [
        'email', 'token'
    ];

    public function user()
    {
        return $this->hasOne('App\User');
    }
}
