import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email="";
  password="";
  constructor(private authService:AuthService) {}

  login(){
    this.authService.login(this.email,this.password)
  }

  ngOnInit(): void {
    
  }
}
