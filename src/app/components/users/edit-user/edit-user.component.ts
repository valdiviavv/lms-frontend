import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editedUser: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;
  public userDetails;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userForm();
    this.getUser(this.route.snapshot.params.id);
  }

  userForm() {
    this.editedUser = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  get firstName() {
    return this.editedUser.get('firstName');
  }

  get lastName() {
    return this.editedUser.get('lastName');
  }

  get email() {
    return this.editedUser.get('email');
  }

  get password() {
    return this.editedUser.get('password');
  }


  getUser(id:string) {
    this.userService.getUser(id).subscribe(
      data => {
        this.userDetails = data;
        console.log(this.userDetails);
      },
      error => console.error(error),
      () => console.log('User loaded')
    )
  }

  editUser(id: string) {
    if (!this.editedUser.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.userService.updateUser(id, this.editedUser.value).subscribe(
        data => {
          this.editedUser.reset();
          console.log('Your user has been edited.');
          this.router.navigate(['/users']);
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }
  }


}//e
