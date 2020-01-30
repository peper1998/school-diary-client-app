import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import { Token } from '../_models/Token';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public userId: number;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public isUserLoggedIn() {
        let token : Token = JSON.parse(localStorage.getItem("token"));
        if(!token)
            return false;

        let date = new Date();
        console.log(date);    
        let expirationDate = Date.parse(token.expirationDate);
        console.log(expirationDate);
        return date.getTime() < expirationDate;
    }

    login(username, password) {
         
        return this.http.post<Token>(`https://school-diary-api.herokuapp.com/school-diary-api/authenticate/login`, { username, password })
            .pipe(map(token => {
                
                localStorage.setItem('token', JSON.stringify(token));
                this.http.get<User>('https://school-diary-api.herokuapp.com/school-diary-api/users/details')
                .subscribe(user => {
                    console.log(user);
                    this.userId=user.id;
                    this.currentUserSubject.next(user);
                });
                
                
                return token;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }
}