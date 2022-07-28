import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "http://localhost:1337/auth/local";
  token;

  constructor(private http: HttpClient,private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri, {identifier: email,password: password})
    .subscribe((resp: any) => {
     
      this.router.navigate(['pacientes']);
      localStorage.setItem('auth_token', resp.jwt);
      
      
      })
       
    }
    logout() {
      this.router.navigate(['home']);
      localStorage.removeItem('token');
    }
   
    public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
    }
}
