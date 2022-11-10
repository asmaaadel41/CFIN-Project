import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer/footer.service';
import { NavbarService } from '../../services/navbar/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public navService: NavbarService, public footer: FooterService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.navService.hidden();
    this.footer.hidden();
  }
  goBack() {
    this.location.back();
  }
}
