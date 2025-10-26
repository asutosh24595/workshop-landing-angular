import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FirebaseService } from '../../firebase.service';
import { CommonModule } from '@angular/common';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signUpform!: FormGroup;
  errMsg: string | null = '';
  succMsg: string | null = '';
  isSigningUp: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.signUpform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  setError(message: string) {
    this.errMsg = message;
    this.succMsg = null;
  }

  setSuccess(message: string) {
    this.succMsg = message;
    this.errMsg = null;
  }

  onSubmit() {
    if (this.signUpform.valid) {
      this.isSigningUp = true;
      const auth = this.firebaseService.getAuthInstance();
      createUserWithEmailAndPassword(
        auth,
        this.signUpform.value.email,
        this.signUpform.value.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
          this.setSuccess('Successfully created account. Please wait.');
          this.isSigningUp = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
          this.isSigningUp = false;
          if (errorMessage.includes('auth/email-already-in-use')) {
            this.setError('User already exists with given credententials');
          } else {
            this.setError('An error occured. Please try later');
          }
        });
    }
  }
}
