import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login ShopDown', url: '/login/loginShopdown', icon: 'storefront' },
    { title: 'Tienda ShopDown', url: '/Tienda/tiendaShopdown', icon: 'storefront' },
    { title: 'Register', url: '/Register/registerShopdown', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Carro de Compras', url: '/folder/Carro', icon: 'cart' },
    { title: '', url: '/folder/Trash', icon: 'trash' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
