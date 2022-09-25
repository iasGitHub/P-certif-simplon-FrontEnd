
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-publication1',
  templateUrl: './add-publication1.component.html',
  styleUrls: ['./add-publication1.component.css']
})

export class AddPublication1Component implements OnInit {

  categories = [
    {
      id : '',
      title : '',
    }
  ];



  publicationData = {
    title : '',
    content : '',
    dateOfPublication : '',
    picture : '',
    active : true,
    category : {
      id : '',
    },
  };

  constructor(
    private _cat : CategoryService,
    private _snack : MatSnackBar,
    private _publication : PublicationService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this._cat.categories().subscribe({
      next: (data : any) => {
        // charger les catégories depuis la base
        this.categories = data;
        console.log(this.categories);
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error !!', 'erreur lors du chargement des données', 'error');
      }
    
    });

  }


  addPublication() {

    // contrôle de saisie en cas de champs non rempli
    if (this.publicationData.title.trim() == '' || this.publicationData.title == null ) {
      this._snack.open('Le titre est obligatoire !!', '', {
        duration : 3000,
      });
      return;
    }

    // enregistrement
    this._publication.addPublication(this.publicationData).subscribe({
      next: (data) => {
        Swal.fire('Success', 'Publication ajoutée avec succès', 'success');
        this.router.navigate(['/user/0']);
        this.publicationData = {
          title : '',
          content : '',
          dateOfPublication : '',
          picture : '',
          active : true,
          category : {
            id : '',
          },
        };
      },
      error : (error) => {
        Swal.fire('Error !! ', 'Erreur lors du chargement des publications ', 'error');
        console.log(error);
      }
      
    });
    
  }

  onFileSelected(event: any) {
    if(event.target.files) {
      const file = event.target.files[0];
    }
  }
}
