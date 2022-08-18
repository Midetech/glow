import { Component } from '@angular/core';
// import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glow';

  selectedIndex: any;
  isOpen = false;

  constructor() { }

  products = [{ name: "Shower butter", price: "190.99", image: "../assets/pmv.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/Herbal.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/jeroen.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/scandinavian.png" },
  { name: "Shower butter", price: "190.99", image: "../assets/pmv.png" },];
  reviews = [{
    title: "Product users",
    number: "7m+"
  }, {
    title: "Brand Products",
    number: "99+"
  }, {
    title: "Product Reviews",
    number: "5m"
  }]

  faqs = [
    {
      question: "Where are products made?",
      answer: "    Many brands, especially in period care, carry products that takes centuries to biodegrade with  pronounce"
    },
    {
      question: "How to purchase our products?",
      answer: "      Made with nature's best ingredients - our products' transparent ingredient. Fear of God Essentials."
    },
    {
      question: "where are products made?",
      answer: "      Made with nature's best ingredients - our products' transparent ingredient. Fear of God Essentials."
    },
  ]

  ngOnInit(): void {
    // Aos.init();
  }


  handleOpenFaq(id: any) {
    this.selectedIndex = id;
    if (this.selectedIndex === id) {
      this.isOpen = true;
      return;
    }
    this.isOpen = false;
  }

}
