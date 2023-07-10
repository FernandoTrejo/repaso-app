import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repaso-app';
  @ViewChild('frontCard') frontCard !: ElementRef<HTMLDivElement>;

  frontCardVisibility = true;
  backCardVisibility = false;

  frontText = 'Parte Delantera de la Tarjeta';
  backText = 'Parte Trasera de la Tarjeta';

  text = this.frontText;

  viewBack(event: any) {
    console.log(event);
  }

  async toggleCards() {
    this.frontCardVisibility = !this.frontCardVisibility;
    this.backCardVisibility = !this.backCardVisibility;

    if(this.frontCardVisibility){
      this.text = this.frontText;
    }else{
      this.text = this.backText;
    }
   
    await this.animateCSS('flipInX');
  }

  animateCSS(animation: string, prefix: string = 'animate__') {
    // We create a Promise and return it
    return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;

      this.frontCard.nativeElement.classList.add(`${prefix}animated`, animationName);

      this.frontCard.nativeElement.addEventListener('animationend', () => {
        this.frontCard.nativeElement.classList.remove(`${prefix}animated`, animationName);
      }, { once: true });
    });
  }


}
