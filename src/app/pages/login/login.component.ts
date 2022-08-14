import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username : '',
    password : '',
  };

  constructor(
      private snack:MatSnackBar,
      private login:LoginService,
      private router:Router
  ) {}

  ngOnInit(): void {
  }

  formSubmit() {
    
    if(
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    )
    {
      this.snack.open('le nom d\'utilisateur est obligatoire ', '', {
        duration: 3000,
      });
      return;
    }

    if(
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    )
    {
      this.snack.open('le mot de passe est obligatoire ', '', {
        duration: 3000,
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe({
      next: (data: any) => {
        console.log('success');
        console.log('data');

        //login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user : any ) => {
            this.login.setUser(user);
            console.log(user);

            if (this.login.getUserRole() == 'ADMIN') {
              // window.location.href = '/admin';
              this.router.navigate(['admin']);
              this.login.LoginStatusSubject.next(true);
            } else if (this.login.getUserRole() == 'Apprenant') {
              // window.location.href = '/user-dashboard';
              this.router.navigate(['user-dashboard/0']);
              this.login.LoginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          }
        );
      },
      error: (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('les informations du compte ne sont pas valides ! Réssayez encore ', '', {
          duration: 3000,
        });
      }
    
    });

  }

}
