import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-publication',
  templateUrl: './view-publication.component.html',
  styleUrls: ['./view-publication.component.css']
})
export class ViewPublicationComponent implements OnInit {

  publications = [
    {
      id: '',
      title: '',
      content: '',
      dateOfPublication: '',
      nbreOfiews: '',
      active : '',
      category: {
        title: ''
      }
    }
  ]

  constructor(private _publication: PublicationService) { }

  ngOnInit(): void {
    this._publication.publications().subscribe(
      (data: any) => {
        this.publications = data;
        console.log(this.publications);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Erreur de chargement des données !', 'error');
      }
    )
  }

  deletePublication(id : any) {
    Swal.fire({
      icon : 'info',
      title : 'Etes-vous sûr de vouloir supprimer ?',
      confirmButtonText : 'Oui',
      showCancelButton : true,
    }).then((result) => {
      if(result.isConfirmed) {
        this._publication.deletePublication(id).subscribe({
          next: (data) => {
            this.publications = this.publications.filter((publication) => publication.id != id);
            Swal.fire('Success', 'Publication supprimée ! ', 'success');
          },
          error: (error) => {
            Swal.fire('Error', 'Erreur de chargement de la page ! ', 'error');
          }
        
        });
      }
    });
  }



}
