import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
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
  currentCategory = null;
  currentIndex = -1;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCategoriesList();
    this.categoryForm()
  }

  categoryForm() {
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
      this.categoriesService.createCategory(this.newCategory.value).subscribe(
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
    this.categoriesService.getCategories().subscribe(
      data => {
        this.categoriesList = data;
        console.log(this.categoriesList);
      },
      error => console.error(error),
      () => console.log('categories loaded')
    )
  }

  getCategoryById() {
    this.categoriesService.getCategory().subscribe(
      data => {
        this.category = data;
        console.log(this.category)
      },
      error => console.error(error),
      () => console.log('category loaded')
    )
  }

  setActiveCategory(category, index) {
    this.currentCategory = category;
    this.currentIndex = index;
  }



}
