import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    returnUrl: string;
    constructor(private userService: UserService,
        private route: ActivatedRoute
        ) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
           // get return url from route parameters or default to '/'
           this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
           console.log('this is return url' + this.returnUrl);
    }
}