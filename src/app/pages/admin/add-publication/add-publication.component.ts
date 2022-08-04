import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

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
    private _publication : PublicationService
    ) { }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data : any) => {
        // charger les catégories depuis la base
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'erreur lors du chargement des données', 'error');
      }
    )

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
    this._publication.addPublication(this.publicationData).subscribe(
      (data) => {
        Swal.fire('Success', 'Publication ajoutée avec succès', 'success');
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
      (error) => {
        Swal.fire('Error !! ', 'Erreur lors du chargement des publications ', 'error');
        console.log(error);
      });
    
  }

}
