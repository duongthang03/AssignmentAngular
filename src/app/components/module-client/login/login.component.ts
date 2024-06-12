import { Component } from '@angular/core';
import { UserService } from '../../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService) { }
  formLogin = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  router = new Router();
  onSubmit = () => {
    this.userService.UserLogin(this.formLogin.value as IUser).subscribe(
      (data) => {
        alert('Đăng nhập thành công');
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        alert(error.error);
      }
    );
  };
}
