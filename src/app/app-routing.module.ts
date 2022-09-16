import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddPublicationComponent } from './pages/admin/add-publication/add-publication.component';
import { AddRoleComponent } from './pages/admin/add-role/add-role.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListUsersComponent } from './pages/admin/list-users/list-users.component';
import { UpdateCategorieComponent } from './pages/admin/update-categorie/update-categorie.component';
import { UpdatePublicationComponent } from './pages/admin/update-publication/update-publication.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewCommentPublicationComponent } from './pages/admin/view-comment-publication/view-comment-publication.component';
import { ViewPublicationComponent } from './pages/admin/view-publication/view-publication.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddPublication1Component } from './pages/user/add-publication1/add-publication1.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadPublicationComponent } from './pages/user/load-publication/load-publication.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profil',
        component: ProfilComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'category/:id',
        component: UpdateCategorieComponent,
      },
      {
        path: 'publications',
        component: ViewPublicationComponent,
      },
      {
        path: 'add-publication',
        component: AddPublicationComponent,
      },
      {
        path: 'publication/:id',
        component: UpdatePublicationComponent,
      },
      {
        path: 'view-comment/:id/:title',
        component: ViewCommentPublicationComponent,
      },
      {
        path: 'instructions/:id',
        component: InstructionsComponent,
      },
      {
        path : 'add-user',
        component : AddUserComponent,
      },
      {
        path: 'user/:id',
        component: UpdateUserComponent,
      },
      {
        path : 'listUsers',
        component : ListUsersComponent,
      },
      {
        path : 'add-role',
        component : AddRoleComponent,
      }
    ],
  },
  {
    path:'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: 'add-publication',
        component: AddPublicationComponent,
      },
      {
        path: ':id',
        component: LoadPublicationComponent,
      },
      {
        path: 'publications',
        component: ViewPublicationComponent,
      },
      {
        path: 'publication/:id',
        component: UpdatePublicationComponent,
      },
      {
        path: 'view-comment/:id/:title',
        component: ViewCommentPublicationComponent,
      },
      {
        path: 'instructions/:id',
        component: InstructionsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
