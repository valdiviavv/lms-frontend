import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList;

  constructor(private userService: UserService) { }

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

}
