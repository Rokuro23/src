import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TiendaRoutingComponent } from './tienda-routing';
import { tiendaComponent } from './tienda.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaRoutingComponent
  ],
  declarations: [tiendaComponent]
})
export class TiendaModule {}
