import { Component, ElementRef, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator, FormBuilder } from '@angular/forms'
import { MapsAPILoader } from '@agm/core';

import { PasswordMatch } from './shared/passwordMatch';
import { Dob } from './shared/dob';

import {DateService} from './shared/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DateService ]
})
export class AppComponent implements OnInit {
  title = 'app';
  signUpForm: FormGroup;
  days = [];
  months = [];
  years = [];
  submited = false;
  //public city: FormControl;

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  
  constructor(private dateOfBirth: DateService, private _fb: FormBuilder){
    this.days = dateOfBirth.days;
    this.months = dateOfBirth.months;
    this.years = dateOfBirth.years;
  }

  ngOnInit(){
    this.signUpForm = this._fb.group({
      'firstName' : ['', [Validators.required, Validators.minLength(3),
      Validators.maxLength(15), Validators.pattern(/^[a-zA-Z ]*$/)]],
      'lastName' : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      'email': new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
      'city': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)]),
      'password': this._fb.group({
        'pass' : new FormControl('', [Validators.required, 
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{4,15}$/)]),
        'confirmPass': new FormControl('', [Validators.required, 
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{4,15}$/)])
      },{validator : PasswordMatch}),
      
      'birth': this._fb.group({
        'month': new FormControl('', Validators.required),
        'day': new FormControl('', Validators.required),
        'year': new FormControl('', Validators.required),
      }, {validator: Dob}),
        
        'check': new FormControl('', Validators.required)
      
      
    });
  }
    
  


  onSubmit(form: FormGroup){
    console.log(this.signUpForm);
    this.submited = true;

    console.log(form.controls.birth.errors, 'lllllll')

  }

  buttonClick(){
    console.log('button clicked');
    this.signUpForm.get('check').setValue('true');
  }

 
}
