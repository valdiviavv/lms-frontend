import { Component, OnInit } from '@angular/core';
import {LmsService} from '../../services/lms.service';
import {Category} from '../../models/category.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList;
  public category;
  newCategory: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;

  constructor(private lmsService: LmsService) {}

  ngOnInit() {
    this.category = new Category('','');
    this.getCategoriesList();
    this.getCategoryById();
    this.newCategory = new FormGroup({
      'name': new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.newCategory.get('name');
  }

  submitCategory() {
    if (!this.newCategory.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.lmsService.createCategory(this.newCategory.value).subscribe(
        data => {
          this.newCategory.reset();
          console.log('Your category has been created.');
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }

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
