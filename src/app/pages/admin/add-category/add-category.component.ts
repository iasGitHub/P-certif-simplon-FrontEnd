import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

category = {
  title: '',
};

  constructor(
    private _category: CategoryService,
    private _snack: MatSnackBar)
  {}

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open('Le nom de la catégorie est obligatoire !', '', {
        duration: 3000,
      });
      return ;
    }

    this._category.addCategory(this.category).subscribe({
      next: (data : any) => {
        this.category.title = '',
        Swal.fire('Succès !', 'Catégorie ajoutée avec succès', 'success');
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Erreur du serveur !!', 'error')
      }
    
    });
  }
}
