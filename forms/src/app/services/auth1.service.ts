import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  constructor() { }
  public formData :any = {
    PhoneNumber:null,
  address:'',
  PermanentAddress:''
    
}

setFormData(value){
  this.formData = value;
 }
 getFormData(){
   return this.formData;
 }
}
