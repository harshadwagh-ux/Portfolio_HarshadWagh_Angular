import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private route: Router) { }
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  nevigate(input: any) {
    if (input == 'About') {
      this.route.navigate(['/About']);
    } 
    else if (input == 'Contact') {
      this.route.navigate(['/Contact']);
    } 
    else if (input == 'Skills') {
      this.route.navigate(['/Skills']);
    }
    else if (input == 'Education') {
      this.route.navigate(['/Education']);
    } 
    else if (input == 'Experience') {
      this.route.navigate(['/Experience']);
    }
    else if (input == 'Page') {
      this.route.navigate(['/Expertise']);
    }
    else {
      this.route.navigate(['/Home']);
    }
  }

}
