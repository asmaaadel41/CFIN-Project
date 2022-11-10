import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  footerVisible: boolean
  constructor() {
    this.footerVisible = true
  }
  hidden() {
    this.footerVisible = false;
  }
}
