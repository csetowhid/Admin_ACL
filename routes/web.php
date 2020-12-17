<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});


//Route::resource('roles', RoleController::class);
//Route::resource('users', UserController::class);
Route::resource('products', ProductController::class);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Category
Route::post('/categorySave', [App\Http\Controllers\CategoryController::class, 'store'])->name('category.store');
Route::get('/categoryList', [App\Http\Controllers\CategoryController::class, 'index'])->name('category.index');
Route::get('/categoryById/{id}', [App\Http\Controllers\CategoryController::class, 'edit'])->name('category.edit');
Route::post('/categoryUpdate/{id}', [App\Http\Controllers\CategoryController::class, 'update'])->name('category.update');
Route::get('/categoryDelete/{id}', [App\Http\Controllers\CategoryController::class, 'destroy'])->name('category.destroy');
//Sub Category
Route::post('/subCategorySave', [App\Http\Controllers\SubCategoryController::class, 'store'])->name('subcategory.store');
Route::get('/subCategoryList', [App\Http\Controllers\SubCategoryController::class, 'index'])->name('subcategory.index');

//User
Route::get('/userList', [App\Http\Controllers\UserController::class, 'index'])->name('user.index');
Route::post('/userSave', [App\Http\Controllers\UserController::class, 'store'])->name('user.store');


//Role
Route::get('/roleList', [App\Http\Controllers\RoleController::class, 'index'])->name('role.index');
//Permission
Route::get('/permissionList', [App\Http\Controllers\RoleController::class, 'getPermission'])->name('role.getPermission');
Route::post('/roleSave', [App\Http\Controllers\RoleController::class, 'store'])->name('role.store');