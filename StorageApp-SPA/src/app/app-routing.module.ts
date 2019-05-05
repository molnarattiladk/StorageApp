import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guards';
import { ItemsComponent } from './Item/items/items.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { EmployeeDetailedComponent } from './Employee/employee-detailed/employee-detailed.component';
import { ItemDetailedComponent } from './Item/item-detailed/item-detailed.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';
import { EmployeeDetailResolver } from './_resolver/employee-detail.resolver';
import { EmployeeListResolver } from './_resolver/employee-list.resolver';
import { EmployeeEditResolver } from './_resolver/employee-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'items', component: ItemsComponent},
      {path: 'items/:id', component: ItemDetailedComponent},
      {path: 'employees', component: EmployeesComponent, resolve: {users: EmployeeListResolver}},
      {path: 'employees/:id', component: EmployeeDetailedComponent, resolve: {user: EmployeeDetailResolver}},
      {path: 'employee/edit/:id', component: EmployeeEditComponent, resolve: {user: EmployeeEditResolver},
       canDeactivate: [PreventUnsavedChanges]}
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
