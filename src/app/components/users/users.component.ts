import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList;
  currentUser = null;
  currentIndex = -1;

  constructor(private userService: UsersService) { }

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

  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }

}