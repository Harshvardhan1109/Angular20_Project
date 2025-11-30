import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface MsalUser {
  name: string;
  roles: string[];
  token: string;
}

@Injectable({ providedIn: 'root' })
export class MsalFacadeService {
  private userSubject = new BehaviorSubject<MsalUser | null>(null);
  user$ = this.userSubject.asObservable();

  login(): Observable<MsalUser> {
    const dummyUser: MsalUser = {
      name: 'Harsh',
      roles: ['User', 'Admin'],
      token: 'dummy-jwt-token',
    };
    this.userSubject.next(dummyUser);
    return of(dummyUser);
  }

  logout(): void {
    this.userSubject.next(null);
  }

  getToken(): string | null {
    return this.userSubject.value?.token ?? null;
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value;
  }

  hasRole(role: string): boolean {
    return this.userSubject.value?.roles.includes(role) ?? false;
  }
}
