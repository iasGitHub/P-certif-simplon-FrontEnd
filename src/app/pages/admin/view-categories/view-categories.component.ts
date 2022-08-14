import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {


  categories = [
    {
      'id': '',
      'title' : '',
    },
  ];

  constructor(private _category: CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      error: (error)=> {
        console.log(error);
        Swal.fire('Error !!', 'Erreur de chargement des données', 'error');
      }
    });

  }

}
