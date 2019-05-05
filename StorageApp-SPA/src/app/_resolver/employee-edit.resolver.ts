import {Injectable} from '@angular/core';
import {User } from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class EmployeeEditResolver implements Resolve<User> {

    constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        // tslint:disable-next-line:no-string-literal
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/employees']);
                return of(null);
            })
        );
    }
}
