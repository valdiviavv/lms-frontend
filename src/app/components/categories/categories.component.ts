import { Component, OnInit } from '@angular/core';
import {LmsService} from '../../services/lms.service';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList;
  public category;

  constructor(private lmsService: LmsService) {}

  ngOnInit() {
    this.category = new Category('','');
    this.getCategoriesList();
    this.getCategoryById();
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

  getCategoryById() {
    this.lmsService.getCategory().subscribe(
      data => {
        this.category = data;
        console.log(this.category)
      },
      error => console.error(error),
      () => console.log('category loaded')
    )
  }



}
