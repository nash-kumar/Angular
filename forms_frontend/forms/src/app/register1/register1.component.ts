import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero1 } from '../shared/hero1.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { HerocomponentComponent } from '../herocomponent/herocomponent.component';
import { Auth1Service } from '../services/auth1.service';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
    user:Hero1;
  constructor(private sun:Router, private xyz:Auth1Service) { }
   
  navigateReg(value){
    this.xyz.setFormData(value);
    this.sun.navigate(['Herocomponent']);
    }
  name;
  ngOnInit(){
    let data = this.xyz.getFormData();
    if(data){
      this.user = {
        PhoneNumber:data.pnumber,
        address:data.address,
        PermanentAddress:data.paddress
      }
    }
    
  }

  
  resetForm(form? :NgForm){
    if(form != null)
   form.reset();
    this.user = {
     PhoneNumber : null,
     address:'',
     PermanentAddress:''
    }
}
}
