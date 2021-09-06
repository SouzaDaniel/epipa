<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\CreatePartner;

class PartnerController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $users = User::all(['id', 'name']);

    return Inertia::render('Auth/RegisterPartner', ['users' => $users]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $input = $request->validate([
      'name' => ['required', 'string', 'max:64'],
      'user_id' => ['required', 'numeric', 'exists:users,id'],
      'responsible_name' => ['required', 'string', 'max:64'],
      'service_type' => ['required', 'string', 'max:64'],
      'phone_number' => ['required', 'string', 'max:16'],
      'accepted_terms' => ['required', 'boolean', 'accepted'],
    ]);

    $partner = new Partner();
    $partner->name = $input['name'];
    $partner->user_id = $input['user_id'];
    $partner->responsible_name = $input['responsible_name'];
    $partner->service_type = $input['service_type'];
    $partner->phone_number = $input['phone_number'];
    $partner->accepted_terms = $input['accepted_terms'];
    $partner->save();

    $user = User::find($input['user_id']);

    Mail::to($user)->send(new CreatePartner());

    return back()->withErrors(['success' => __('partners.created')]);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
