import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private route: Router) { }
  dropdownOpen = false;


  isMobile: boolean = false;
  isTablet: boolean = false;
  isDropdownOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateDeviceType();
  }

  ngOnInit() {
    this.updateDeviceType();
  }

  updateDeviceType() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width <= 1024;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  navigate(input: any) {
    if (input == 'About') {
      this.route.navigate(['/About']);
       this.isDropdownOpen = !this.isDropdownOpen;
    } 
    else if (input == 'Contact') {
      this.route.navigate(['/Contact']);
       this.isDropdownOpen = !this.isDropdownOpen;
    } 
    else if (input == 'Skills') {
      this.route.navigate(['/Skills']);
       this.isDropdownOpen = !this.isDropdownOpen;
    }
    else if (input == 'Education') {
      this.route.navigate(['/Education']);
       this.isDropdownOpen = !this.isDropdownOpen;
    } 
    else if (input == 'Experience') {
      this.route.navigate(['/Experience']);
       this.isDropdownOpen = !this.isDropdownOpen;
    }
    else if (input == 'Page') {
      this.route.navigate(['/Expertise']);
       this.isDropdownOpen = !this.isDropdownOpen;
    }
    else {
      this.route.navigate(['/Home']);
       this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

}
