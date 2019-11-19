import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'
import * as firebase from 'firebase';
import { AuthFirebaseService } from 'src/app/services/auth-firebase/auth-firebase.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  exprRegEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authFirebase: AuthFirebaseService
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.exprRegEmail)])],
      password: ['', Validators.required]
    });
  }
  login_wit_email(){
    this.authFirebase.login_wit_email(this.loginForm.value).then(() => {
      Swal.fire({
        icon: 'success',
        title:"Buen trabajo!!!",
        text: "Datos correctos.",
        preConfirm: () => {
          localStorage.setItem('user_loggeado',firebase.auth().currentUser.uid);
          let user_loggeado = firebase.auth().currentUser.uid
          this.router.navigate(['home-admins']);///',user_loggeado
        }
      })
    }, (error) => {
      Swal.fire({
        icon: 'warning',
        title:"Error!!!",
        text: "DatoS incorrectos."
      })
    });
  }
}

