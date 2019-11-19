import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor( 
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }
  
  login_wit_email(user:any){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
  }
  async logOut() {
    await this.afAuth.auth.signOut();
    //localStorage.removeItem('user_loggeado');
    this.router.navigate(['']);
  }
}
