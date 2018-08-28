import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth1Service } from '../services/auth1.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  
  constructor(private na:Router, private xyz:Auth1Service) { }
   
  navigateReg(){
    this.na.navigate(['Herocomponent']);
    }
  name;
  ngOnInit() {
  }

}
