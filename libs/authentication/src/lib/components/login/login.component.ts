import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessService } from '@viber-bot/shared';
import { AuthFieldsService } from '../../core/services/auth-fields.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'viber-bot-login',
  templateUrl: './login.component.html',
  styles: [
    `
      ::ng-deep {
        .auth-card {
          width: 400px !important;
          .auth-logo {
            margin: auto;
            margin-bottom: 2rem;
          }
        }
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  /**
   * @description
   * Login is a component with 2 modes:
   *    1) login mode
   *      - this mode is created for logging user
   *    2) forgot password mode
   *      - this mode is designed to send a message to a user who has forgotten their password
   **/

  /**
   * * General
   * @form -> main form
   * @forgotPasswordMode :
   *    1) if forgotPasswordMode = true then form has only one field which is email, and when user click send
   *       he will recieve on his email message with the help of which it can reset the password
   *    2) if forgotPasswordMode = false then form has two fields email and password
   * @loading if (loading == true) loading spinner will be visible
   */

  form!: FormGroup;
  forgotPasswordMode = false;
  loading = false;
  mainLogo!: string;


  /** ==========================================
   *               * CONSTRUCTOR *
   ============================================== */

  constructor(
    public fieldsService: AuthFieldsService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messService: MessService,
    public store: Store<{ config: any }>,
  ) {

    this.store.select("config").subscribe((res: any) => {
      this.mainLogo = res.mainLogo;
    })




  }

  /** ==========================================
   *               * LIFECYCLES *
   ============================================== */

  ngOnInit(): void {
    // Form init
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /** ==========================================
   *               * MAIN FEATURES *
   ============================================== */

  handleSubmit() {
    this.loading = true;

    /**
     * if we are in login mode
     */
    if (!this.forgotPasswordMode) {
      this.authService
        .login({
          email: this.form.get('email')?.value,
          password: this.form.get('password')?.value
        })
        .subscribe(
          /**
           *
           * @param res object that we get from BE if response is successful
           */
          (res: any) => {
            this.loading = false;
            if (res.success) {
              /**
               *    setting admin object and token in local storage so we prevent to lost information about current logged user
               */
              localStorage.setItem('admin', JSON.stringify(res.admin));
              localStorage.setItem('token', JSON.stringify(res.token));
              this.router.navigate(['home']);
              // this.user.next(response.admin);
              this.authService.user = res.admin;
              this.authService.isLoggedIn = true;
              this.messService.addSuccess({
                detail: 'Uspesno logovanje',
                severity: "success",
                title: "Uspesno"
              })
              // this.authService.autoLogout(60 * 60 * 1000);
            }
          },
          /**
           *
           * @param err Object that we get from BE if response isn't successful
           * @returns
           */
          (err: any) => {
            console.log(err)
            this.loading = false;
            return this.messService.addError({
              severity: 'error',
              title: 'error',
              detail: err.error.message,
              sticky: true,
            });
          }
        );
    }
  }

  /**
   * @onForgotPasswordClick toggle modes between forgotPassword and login mode
   * if (forgotPasswordMode == true) we are in forgot password mode
   *  else we are in login mode
   */
  handleForgotPasswordClick() {
    this.forgotPasswordMode = !this.forgotPasswordMode;
    if (this.forgotPasswordMode) {
      this.form.removeControl('password');
    } else {
      this.form.addControl(
        'password',
        new FormControl(null, [Validators.required, Validators.minLength(6)])
      );
    }
  }
}
