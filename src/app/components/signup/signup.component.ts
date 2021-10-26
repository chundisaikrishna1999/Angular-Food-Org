import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registrationForm = new FormGroup({});
  public user: any;
  public isFormSubmitted: boolean = false;


  constructor(private formBuilder: FormBuilder,private authService:AuthService, private router: Router) {
    this.registrationForm = {} as FormGroup;
    this.user = {};
    this.isFormSubmitted = false;

   }

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm() {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
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
    this.user = this.registrationForm.value;
    const name = this.registrationForm.get('name')?.value;
    const email = this.registrationForm.get('email')?.value;
    const phone = this.registrationForm.get('phone')?.value;
    const password = this.registrationForm.get('password')?.value;

    const registered = this.authService.registerUser(
      email,password,phone,name
    );
    if (registered) {
      alert('User registered successfully! redirecting to login page');

      //set Timeout to redirect to login page
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);
      
    }
    // else set error message and reset the form
    else {
      //alert already exists and redirect to login page

      alert('User already exists! redirecting to login page');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);

      this.onReset();
    }


  }
  public get userFormControl() {
    return this.registrationForm.controls;
  }

  public onReset() {
    this.registrationForm.reset();
  }

}
