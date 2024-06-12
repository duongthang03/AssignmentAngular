import { Component } from '@angular/core';
import { UserService } from '../../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  formRegister = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  router = new Router();
  onSubmit = () => {
    this.userService.RegisterUser(this.formRegister.value as IUser).subscribe(
      (data) => {
        alert('Đăng ký thành công');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        alert(error.error);
      }
    );
  };
}
