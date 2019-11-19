import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/services/auth-firebase/auth-firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public authFirebase: AuthFirebaseService
  ) { }

  ngOnInit() {
  }

}
