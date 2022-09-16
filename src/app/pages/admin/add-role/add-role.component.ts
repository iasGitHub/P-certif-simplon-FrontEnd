import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role = {
    roleName: '',
  };

  constructor(
    private _role: RoleService,
    private _snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.role.roleName.trim() == '' || this.role.roleName == null) {
      this._snack.open('Le nom du rôle est obligatoire !', '', {
        duration: 3000,
      });
      return ;
    }

    this._role.addRole(this.role).subscribe({
      next: (data : any) => {
        this.role.roleName = '',
        Swal.fire('Succès !', 'Rôle ajoutée avec succès', 'success');
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Erreur du serveur !!', 'error')
      }
    
    });
  }

}
