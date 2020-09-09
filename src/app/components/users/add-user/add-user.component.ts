import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;

  constructor(private userService: UsersService, private route: Router) { }

  ngOnInit() {
    this.userForm();
  }

  userForm() {
    this.newUser = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  get firstName() {
    return this.newUser.get('firstName');
  }

  get lastName() {
    return this.newUser.get('lastName');
  }

  get email() {
    return this.newUser.get('email');
  }

  get password() {
    return this.newUser.get('password');
  }

  submitUser() {
    if (!this.newUser.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.userService.createUser(this.newUser.value).subscribe(
        data => {
          console.log('Your user has been created.');
          console.log(this.newUser.value);
          this.newUser.reset();
          this.route.navigate(['/users']);
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}//end
