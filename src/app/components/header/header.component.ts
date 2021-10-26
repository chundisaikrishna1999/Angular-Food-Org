import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public currentUser: any;

  constructor(private authService: AuthService) {


  }

  ngOnInit(): void {

    this.authService.loginStateEmitter.subscribe((res) => {


      if (res) {
        this.isLoggedIn = true;
        this.currentUser = res;
      } else {
        this.isLoggedIn = false;
      }
    })

  }

}
