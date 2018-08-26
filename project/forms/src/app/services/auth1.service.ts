import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
  private api_base: any = window.location.hostname;

  constructor(public http: HttpClient) { }
  public formData: any = {
    PhoneNumber: '',
    address: '',
    PermanentAddress: ''

  }

  setFormData(value) {
    this.formData = value;
  }
  getFormData() {
    return this.formData;
  }
  public storeUserData(data) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(`http://${this.api_base}:4010/users/add_data`, {"data": data}, httpOptions);

  }
}
