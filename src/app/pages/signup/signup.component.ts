import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

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
    this.userService.addUser(this.user).subscribe(
      (data) => {
        // success
        console.log(data);
        Swal.fire('Success', 'Utilisateur enregistré avec succès !');
      },
      (error) => {
        //error
        console.log(error);
        this.snack.open('Vérifiez que tous les champs ont été remplis !', '',{
          duration: 3000,
        });
      }
    );

  }

}
