import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errMsg: string | null = '';
  isSigningIn: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    localStorage.setItem("isLoggedIn",'false');
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }



  onSubmit() {
    if (this.form.valid) {
      this.isSigningIn = true;
      const auth = this.firebaseService.getAuthInstance();
      signInWithEmailAndPassword(
        auth,
        this.form.value.email,
        this.form.value.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("isLoggedIn",'true');
            this.router.navigate(['home']);
          this.isSigningIn = false;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage); // Handle error
          this.isSigningIn = false;
          if (errorMessage.includes('auth/invalid-credential')) {
            this.errMsg = 'Invalid email or password. Please try again';
          }else{
            this.errMsg = 'An error occured. Please try later';
          }
        });
    } 
  }
}
