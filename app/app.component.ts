import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    //Login De la pagina
    { title: 'Login ShopDown', url: '/login/loginShopdown', icon: 'storefront' },
    //Registrarse en la pagina
    { title: 'Register', url: '/Register/registerShopdown', icon: 'paper-plane' },
    //Favoritos
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    //Carro de Compras
    { title: 'Carro de Compras', url: '/folder/Carro', icon: 'cart' },
    //
    { title: '', url: '/folder/Trash', icon: 'trash' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
  ];
  public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/Tienda/tiendaShopdown', icon: 'storefront' },
    //Perfil
    { title: 'Perfil', url: '/folder/Trash', icon: 'person-circle' },
    

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}


