import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _cat: CategoryService,
    private router:Router,
  ) { }

  id = 0;
  categorie : any;

  ngOnInit(): void {

    this.id = this._route.snapshot.params['id'];
    this._cat.getCategory(this.id).subscribe({
      next: (data: any) => {
        this.categorie = data;
        console.log(this.categorie);
      },
      error: (error) => {
        console.log(error);
      }
    
    });
  }

  //mettre à jour les détails de la catégorie
  public updateData() {
    this._cat.updateCategory(this.categorie).subscribe({
      next: (data: any) => {
        Swal.fire('Success !!', 'Catégorie mis à jour', 'success');
        this.router.navigate(['/admin/categories']);
      },
      error: (error: any) => {
        Swal.fire('Error !!', 'Erreur lors de la mis à jour', 'error');
        console.log(error);
      }
    
    });
  }

}
