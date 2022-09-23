import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {


  id = 0;
  user : any;

  constructor(
    private _route: ActivatedRoute,
    private _user : UserService
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._user.getUser(this.id).subscribe({
      next: (data: any) => {
        this.user = data;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      }
    
    });
  }

  //mettre à jour les détails de l'utilisateur
  public updateData() {
    this._user.updateUser(this.user).subscribe({
      next: (data: any) => {
        Swal.fire('Success !!', 'Utilisateur mis à jour', 'success');
      },
      error: (error: any) => {
        Swal.fire('Error !!', 'Erreur lors de la mis à jour', 'error');
        console.log(error);
      }
    
    });
  }

}
