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

    //
    { title: '', url: '/folder/Trash', icon: 'trash' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
  ];


  public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/Tienda/tiendaShopdown', icon: 'storefront' },
    //Perfil
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person-circle' },
  ];

  public appCarro = [
    //Carro
    { title: 'Carro', url: 'folder/Carro', icon: 'cart' },
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}


