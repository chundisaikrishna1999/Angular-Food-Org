import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  closeResult = '';
  public loginForm = new FormGroup({});
  public user: any;
  public isFormSubmitted: boolean = false;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private authService:AuthService, private router: Router) {
    this.loginForm = {} as FormGroup;
    this.user = {};
    this.isFormSubmitted = false;
  }

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      this.closeResult=reason;
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm() {
    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      
    });
  }
  public onSubmit() {
    this.isFormSubmitted = true;
    this.user = this.loginForm.value;

    const {email,password}=this.user;

    const response=this.authService.authenticateUser(email,password);

    if(response==='ALRIGHT'){
      alert("user login success");
      this.router.navigate(['/home']);
    }
    else if(response==='INCORRECT_PASSWORD'){
      alert("password incorect");
      this.router.navigate(['/login']);
    }
    else if(response==='DOESNT_EXIST'){
      alert("user not registered.please register");
      this.router.navigate(['/signup']);
    }





  }
  public get userFormControl() {
    return this.loginForm.controls;
  }

  public onReset() {
    this.loginForm.reset();
  }
}
