import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  users = [
    {
      'id': '',
      'title' : '',
      'firstName' : '',
      'lastName' : '', 
      'username' : '', 
      'email' : '',
      'phone' : '',
      'profile' : '',
      'enabled' : '',
    },
  ];

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        console.log(this.users);
      },
      error: (error)=> {
        console.log(error);
        Swal.fire('Error !!', 'Erreur de chargement des données', 'error');
      }
    });

  }

}
