import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
import {RegistrationService} from '../registration.service';
import { User} from '../user';
import {Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user=new User();
  msg=" ";

  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit() {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("response received");
        this._router.navigate(['/login']);
      },
      error=> {
        console.log("exception occured");
        this.msg=error.error;
      }
      )
  }

}
