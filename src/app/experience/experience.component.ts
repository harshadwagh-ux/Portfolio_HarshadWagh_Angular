import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  timelineData = [
    {
      company: "Infosys Pvt. Ltd. Pune",
      position: "Associate Consultant - Angular Developer",
      duration: "December 2024 - Present"
    },
    {
      company: "Infosys Pvt. Ltd. Pune",
      position: "Associate Consultant - Angular Developer",
      duration: "December 2024 - Present"
    },
    {
      company: "Infosys Pvt. Ltd. Pune",
      position: "Associate Consultant - Angular Developer",
      duration: "December 2024 - Present"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // No animation logic needed here
  }

}
