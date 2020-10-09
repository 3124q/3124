<?php
use think\facade\Route;
Route::post("nowuser","personalcenter/nowuser");
Route::post("edituser","personalcenter/edituser");
Route::post("sendcomplaint","complaints/sendcomplaint");