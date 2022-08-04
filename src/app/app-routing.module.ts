import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddPublicationComponent } from './pages/admin/add-publication/add-publication.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewPublicationComponent } from './pages/admin/view-publication/view-publication.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SignupComponent } from './pages/signup/signup.component';
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
        path: 'publications',
        component: ViewPublicationComponent,
      },
      {
        path: 'add-publication',
        component: AddPublicationComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
