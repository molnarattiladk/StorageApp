import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ItemsComponent } from './Item/items/items.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { ItemService } from './_services/item.service';
import { UserService } from './_services/user.service';
import { EmployeeDetailedComponent } from './Employee/employee-detailed/employee-detailed.component';
import { ItemDetailedComponent } from './Item/item-detailed/item-detailed.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';
import { EmployeeDetailResolver } from './_resolver/employee-detail.resolver';
import { EmployeeListResolver } from './_resolver/employee-list.resolver';
import { EmployeeEditResolver } from './_resolver/employee-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ItemDetailedResolver } from './_resolver/item-detail.resolver';
import { ItemListResolver } from './_resolver/item-list.resolver';
import { ItemEditResolver } from './_resolver/item-edit.resolver';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { ItemEditComponent } from './Item/item-edit/item-edit.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';




export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      NavComponent,
      ItemsComponent,
      EmployeesComponent,
      EmployeeDetailedComponent,
      ItemDetailedComponent,
      ItemCreateComponent,
      EmployeeEditComponent,
      EmployeeAddComponent,
      ItemEditComponent,
      ContactComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      PaginationModule.forRoot(),
      ReactiveFormsModule,
      MaterialModule,
      FlexLayoutModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
})
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      ItemService,
      UserService,
      EmployeeDetailResolver,
      EmployeeListResolver,
      EmployeeEditResolver,
      PreventUnsavedChanges,
      ItemDetailedResolver,
      ItemListResolver,
      ItemEditResolver
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ItemCreateComponent
   ]
})
export class AppModule { }
