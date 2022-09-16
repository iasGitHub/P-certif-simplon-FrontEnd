import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _publication: PublicationService, 
    private _cat: CategoryService
  ) { }

  id = 0;
  publication : any;
  categories : any;

  ngOnInit(): void {

    this.id = this._route.snapshot.params['id'];
    this._publication.getPublication(this.id).subscribe({
      next: (data: any) => {
        this.publication = data;
        console.log(this.publication);
      },
      error: (error) => {
        console.log(error);
      }
    
    });

    this._cat.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (error) => {
        alert('Erreur de chargement des catégories ');
      }
    
    });
  }

  //mettre à jour les détails de la publication
  public updateData() {
    this._cat.updateCategory(this.categories).subscribe({
      next: (data: any) => {
        Swal.fire('Success !!', 'Publication mis à jour', 'success');
      },
      error: (error: any) => {
        Swal.fire('Error !!', 'Erreur lors de la mis à jour', 'error');
        console.log(error);
      }
    
    });
  }

}
