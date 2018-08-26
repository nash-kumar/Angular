import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero1 } from '../shared/hero1.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { HerocomponentComponent } from '../herocomponent/herocomponent.component';
import { Auth1Service } from '../services/auth1.service';
import { AuthServiceService } from '../services/auth.service.service';



@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  user: Hero1;
  constructor(private sun: Router, private xyz: Auth1Service, private abc: AuthServiceService) { }

  addReg(value) {
    console.log("value", value);
    console.log("herocomponent", this.abc.formData)

    this.xyz.setFormData(value);
    console.log("both component", this.abc.formData + this.xyz.formData)
    var userData = {
      first_Name: this.abc.formData.fName,
      last_Name: this.abc.formData.lName,
      email: this.abc.formData.Email,
      country: this.abc.formData.select,
      phoneNumber: this.xyz.formData.pnumber,
      currentAddress: this.xyz.formData.address,
      permanentAddress: this.xyz.formData.paddress
    }
    if (this.abc.formData.gender != "") {
      userData["gender"] = this.abc.formData.gender;
    }
    var city = [];
    if (this.abc.formData.check === true) {
      city.push("Bangalore");
    } else if (this.abc.formData.check1 === true) {      
      city.push("Chennai");
    } else if (this.abc.formData.check2 === true) {      
      city.push("Mumbai");
    } else if (this.abc.formData.check3 === true) {      
      city.push("Delhi");
    } else if (this.abc.formData.remember === true) {
      userData["remeberme"] = true;
    }
    userData["city"] = city;
    console.log("userData", userData)
    this.xyz.storeUserData(userData).subscribe((response: any) => {
      console.log("resposne", response);
      if (response.success) {
        alert(response.message);
        this.resetForm();
        this.sun.navigate(['Herocomponent']);
      } else {
        alert(response.message);
        this.sun.navigate(['Herocomponent']);
      }
    });
  }
  navigateReg() {
    this.sun.navigate(['Herocomponent']);

  }
  name;
  ngOnInit() {
    let data = this.xyz.getFormData();
    if (data) {
      this.user = {
        PhoneNumber: data.pnumber,
        address: data.address,
        PermanentAddress: data.paddress
      }
    }

  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      PhoneNumber: null,
      address: '',
      PermanentAddress: ''
    }
  }
}
