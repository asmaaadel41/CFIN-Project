import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navbarVisible: boolean;
  constructor() {
    this.navbarVisible = true;
  }
  hidden() {
    this.navbarVisible = false;
  }

}
