import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _publication: PublicationService, 
    private _cat: CategoryService,
    private router:Router,
  ) {}

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
    this._publication.updatePublication(this.publication).subscribe({
      next: (data: any) => {
        Swal.fire('Success !!', 'Publication mis à jour', 'success');
        this.router.navigate(['/admin/publications']);
      },
      error: (error: any) => {
        Swal.fire('Error !!', 'Erreur lors de la mis à jour', 'error');
        console.log(error);
      }
    
    });
  }

}
