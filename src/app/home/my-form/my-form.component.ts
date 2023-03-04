import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent {
  myForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required,  Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.maxLength(6), Validators.minLength(5)])
  });

  userData: any = ''
  passwordData: any = ''
  addressData: any = ''
  stateData:any = ''
  zipData:any=''

  submitForm() {
    console.warn(this.myForm.value)
    this.userData = this.myForm.value.user
    this.passwordData = this.myForm.value.password
    this.addressData = this.myForm.value.address
    this.stateData = this.myForm.value.state
    this.zipData = this.myForm.value.zip
  }
  get userValidator() {
    return this.myForm.get('user')
  }

  get passwordValidator() {
    return this.myForm.get('password')
  }

  get addressValidator() {
    return this.myForm.get('address')
  }

  get stateValidator() {
    return this.myForm.get('state')
  }

  get zipValidator() {
    return this.myForm.get('zip')
  }


}
