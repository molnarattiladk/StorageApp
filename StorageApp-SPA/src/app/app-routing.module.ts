import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guards';
import { ItemsComponent } from './items/items.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { EmployeeDetailedComponent } from './Employee/employee-detailed/employee-detailed.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'items', component: ItemsComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'employees/:id', component: EmployeeDetailedComponent}
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
