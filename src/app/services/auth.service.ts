import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  public loginStateEmitter: Subject<any> = new Subject();

  public currentUser:any ;


  //array of users who are valid

  public validUsers = [
    {
      email: "admin@admin.com",
      password: 'admin123',
      phoneno: '1234567890',
      name: 'admin',
    },
    {
      email: 'user@gmail.com',
      password: 'user1234',
      phoneno: '1234567890',
      name: 'user',
    },
  ];

  constructor() { 

   
  }

  // function to authenticate user basd on email and password having phoneno and name

  public authenticateUser(email: string, password: string): string {
    // check if user doent exist return "DOES_NOT_EXIST" else check if password is correct return "PASSWORD_INCORRECT" else return "SUCCESS"

    for (let user of this.validUsers) {
      if (user.email === email) {
        if (user.password === password) {
          this.loginStateEmitter.next(user);
          this.isLoggedIn=true;
          this.currentUser = user;
          return 'ALRIGHT';
        } else {
          return 'INCORRECT_PASSWORD';
        }
      }
    }
    return 'DOESNT_EXIST';
  }

  // check if a user is already registered else add email, password, phoneno and name

  public registerUser(
    email: string,
    password: string,
    phoneno: string,
    name: string
  ): boolean {
    for (let user of this.validUsers) {
      if (user.email === email) {
        return false;
      }
    }
    this.validUsers.push({
      email: email,
      password: password,
      phoneno: phoneno,
      name: name,
    });
    
    console.log(this.validUsers);
    return true;
  }

  // function to deauthenticate user and set isLoggedIn to false

  public deauthenticateUser(): void {
    this.loginStateEmitter.next(null);
    this.isLoggedIn=false;
  }


  public getCurrentUser() {
    return this.currentUser;
  }


  public isloogedIn(): boolean {
    return this.isLoggedIn;
  }
}
