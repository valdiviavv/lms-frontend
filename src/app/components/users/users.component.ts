import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList;
  public userDetails;
  currentUser = null;
  currentIndex = -1;

  constructor(private userService: UsersService, private route: Router) { }

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

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.userDetails = data;
        this.getUsersList();
      },
      error => console.error(error),
      () => console.log('User Deleted')
    );
  }


  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }

}
