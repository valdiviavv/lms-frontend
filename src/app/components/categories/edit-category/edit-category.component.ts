import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editedCategory: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;
  public categoryDetails;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryDetails = new Category('','');
    this.categoryForm();
    this.getCategory(this.route.snapshot.params.id);
  }


  categoryForm() {
    this.editedCategory = new FormGroup({
      'name': new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.editedCategory.get('name');
  }

  getCategory(id:string) {
    this.categoriesService.getCategory(id).subscribe(
      data => {
        this.categoryDetails = data;
        console.log(this.categoryDetails);
      },
      error => console.error(error),
      () => console.log('Course loaded')
    )
  }

  updateCategory(id: string) {
    if (!this.editedCategory.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.categoriesService.updateCategory(id, this.editedCategory.value).subscribe(
        data => {
          this.editedCategory.reset();
          console.log('Your category has been edited.');
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }

  }

}
