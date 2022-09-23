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

  deleteCategory(id : any) {
    Swal.fire({
      icon : 'info',
      title : 'Etes-vous sûr de vouloir supprimer ?',
      confirmButtonText : 'Oui',
      showCancelButton : true,
    }).then((result) => {
      if(result.isConfirmed) {
        this._category.deleteCategory(id).subscribe({
          next: (data) => {
            this.categories = this.categories.filter((category) => category.id != id);
            Swal.fire('Success', 'Catégorie supprimée ! ', 'success');
          },
          error: (error) => {
            Swal.fire('Error', 'Erreur de chargement de la page ! ', 'error');
          }
        
        });
      }
    });
  }

}
