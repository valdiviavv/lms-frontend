import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {UsersService} from '../../services/users.service';
=======
import {UserService} from '../../services/user.service';
>>>>>>> origin/master

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList;
<<<<<<< HEAD
  currentUser = null;
  currentIndex = -1;

  constructor(private userService: UsersService) { }
=======

  constructor(private userService: UserService) { }
>>>>>>> origin/master

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.userService.getUsers().subscribe(
      data => {
        this.userList = data;
        console.log(this.userList);
      },
      error => console.error(error),
      () => console.log("Users loaded")
    )
  }

<<<<<<< HEAD
  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }

=======
>>>>>>> origin/master
}
