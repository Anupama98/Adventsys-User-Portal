import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  
  constructor(private _service:RegistrationService) { }

  ngOnInit(): void {
  }

  



}
