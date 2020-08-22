import { Component, OnInit } from '@angular/core';
import {LmsService} from '../../services/lms.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList;

  constructor(private lmsService: LmsService) {}

  ngOnInit() {
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.lmsService.getCategories().subscribe(
      data => {
        this.categoriesList = data;
        console.log(this.categoriesList);
      },
      error => console.error(error),
      () => console.log('categories loaded')
    )
  }

}
