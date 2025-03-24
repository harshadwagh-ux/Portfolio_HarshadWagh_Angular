import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){
    let texts = [ "Web development |", "Frontend development |","Angular development |"];
    let currentIndex = 0;   
    function changeText() {
        const dynamicTextElement = document.getElementById('dynamic-text');
        if (dynamicTextElement) {
          dynamicTextElement.textContent = texts[currentIndex];
          currentIndex = (currentIndex + 1) % texts.length;
      }
    }
    setInterval(changeText, 3000);
  }

  download(){
    const link = document.createElement('a');
    link.href = 'assets/ResumeHarshadWagh.pdf';
    link.download = 'ResumeHarshadWagh.pdf';
    link.click();
  }


}
