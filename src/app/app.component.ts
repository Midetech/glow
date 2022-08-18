import { Component } from '@angular/core';
// import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glow';

  constructor() { }


  ngOnInit(): void {
    // Aos.init();
  }

  products = [{ name: "Shower butter", price: "190.99", image: "../assets/pmv.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/Herbal.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/jeroen.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/scandinavian.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/pmv.png" },]
}
