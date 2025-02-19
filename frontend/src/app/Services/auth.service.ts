import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5022/User/login';
  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string)
  {
    const url = `${this.baseUrl}?username=${username}&password=${password}`;
    this.http.get(url,{ responseType: 'text' as 'json' }).subscribe((data) => {
      if(data){
      this.saveToken(data.toString())
      this.router.navigate(['/home']);
      }else{
        alert("Invalid username or password");
      }
    });
  }
  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);
      const roleKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
      return decodedToken[roleKey] || null;
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }
}
