import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService:UserService,
    private snack:MatSnackBar,
    private router:Router,
    public login: LoginService,
  ) { }

  public user = {

    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    profile: '',
};

ngOnInit(): void {
}

formSubmit()
{
  console.log(this.user);
  if(this.user.username == '' || this.user.username == null ||
  this.user.firstName == '' || this.user.firstName == null) {
    // alert('User is required !');
    this.snack.open("Username & firstName are required ", '', {
      duration: 3000,
    });
    return;
  }

  // ajout d'un utilisateur avec validation
  this.userService.addUser(this.user).subscribe({
    next: (data) => {
      // success
      console.log(data);
      Swal.fire('Success', 'Utilisateur enregistré avec succès !');
      this.router.navigate(['admin/listUsers']);
    },
    error: (error) => {
      //error
      console.log(error);
      this.snack.open('Vérifiez que tous les champs ont été remplis !', '',{
        duration: 3000,
      });
    }
  
  });

}

}
