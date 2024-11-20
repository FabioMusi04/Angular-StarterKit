import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'https://example.com/api/auth';
    private currentUserSubject = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) { }

    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((response: any) => {
                localStorage.setItem('token', response.token);
                this.currentUserSubject.next(response.user);
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getCurrentUser(): Observable<any> {
        return this.currentUserSubject.asObservable();
    }
}
