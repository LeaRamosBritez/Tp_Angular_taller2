import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppComponent } from './app.component';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'homeD', component: AppComponent},
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard]  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'perfil', component : PerfilUsuarioComponent , canActivate: []},
  { path: 'administrador', component : AdministradorComponent , canActivate: []},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
