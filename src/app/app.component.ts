import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glow';

  products = [{ name: "Shower butter", price: "190.99" }, { name: "Shower butter", price: "190.99" }, { name: "Shower butter", price: "190.99" }, { name: "Shower butter", price: "190.99" }, { name: "Shower butter", price: "190.99" },]
}
