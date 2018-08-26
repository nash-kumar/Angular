import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  public formData :any = {
    FirstName:'',
    LastName:'',    
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
   console.log("formdata", this.formData)
  }
  getFormData(){
    return this.formData;
  }
}

