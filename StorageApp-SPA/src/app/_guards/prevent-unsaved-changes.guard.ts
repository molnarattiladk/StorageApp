import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeEditComponent } from '../Employee/employee-edit/employee-edit.component';




@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<EmployeeEditComponent> {
    canDeactivate(component: EmployeeEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Tuti');
        }
        return true;
    }
}
