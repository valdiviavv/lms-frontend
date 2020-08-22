import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('authenticateUser')
  }

}
