import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  public formData :any = {
    FirstName:'',
    LastName:'',
    FatherName:'',
    email:'',
    gender:'',
    check:'',
    check1:'',
    select:'',
    select1:'',
    select2:'',
    select3:''
  };

  setFormData(value){
   this.formData = value;
  }
  getFormData(){
    return this.formData;
  }
}

