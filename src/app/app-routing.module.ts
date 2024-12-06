import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'  },
  {
    path:'register',
    component:CreateRegistrationComponent,
    
  },
  {
    path:'list',
    component:RegistrationListComponent
  },
  {
    path:'userdetails/:id',
    component:UserDetailsComponent
  },
  { path: 'update/:id', component: CreateRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
