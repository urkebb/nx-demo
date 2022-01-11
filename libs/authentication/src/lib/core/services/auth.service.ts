import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: Subject<any> = new Subject();
  user!: { name: string; surname: string } | null;
  isLoggedIn = false;
  timeout: any;
  apiUrl!: string;
  private userSubject!: BehaviorSubject<any>;

  constructor(private http: HttpClient, private router: Router, public store: Store<{ config: any }>) {

    store.select('config').subscribe((res) => {
      this.apiUrl = res.apiUrl;
    });

    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('admin') ?? '{}')
    );


  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  login(credidentialsObject: {
    email: string;
    password: string;
  }) {
    const headers = new HttpHeaders();
    console.log(credidentialsObject.email, credidentialsObject.password)

    return this.http.post(
      `${ this.apiUrl }admin/login`,
      credidentialsObject, {
      headers: new HttpHeaders().set('Accept-Language', 'sr')
    }
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.removeItem('expirationDate');
    this.router.navigate(['auth']);
    // this.user.next(null);
    this.user = null;
    this.isLoggedIn = false;
  }

  // autoLogin() {
  //   clearTimeout(this.timeout);
  //   const token = localStorage.getItem('token');
  //   const admin = localStorage.getItem('admin');
  //   let storageExpirationDate = localStorage.getItem('expirationDate');
  //   let expirationDate;
  //   if (storageExpirationDate) {
  //     expirationDate = new Date(JSON.parse(storageExpirationDate));
  //     let expirationTime = expirationDate.getTime() - new Date().getTime();
  //     // this.autoLogout(expirationTime);
  //     // console.log(expirationTime / 1000 / 60)
  //   }
  //   if (token && admin) {
  //     // this.user.next(admin);
  //     this.user = JSON.parse(admin);
  //     this.isLoggedIn = true;
  //   } else {
  //     // this.user.next(null);
  //     this.user = null;
  //     this.isLoggedIn = false;
  //   }
  // }

  // autoLogout(expirationTime: number) {
  //   let expirationDate = new Date(new Date().getTime() + expirationTime);
  //   localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
  //   this.timeout = setTimeout(() => {
  //     this.logout();
  //   }, expirationTime);
  // }
}
