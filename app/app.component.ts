import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Guia de compra', url: 'guia/', icon: 'bag' },
    { title: 'Opciones', url: 'opciones/', icon: 'phone-portrait' },
    { title: 'Calculadora', url: 'calculadora/', icon: 'calculator' },
    { title: 'Configuracion', url: 'configuracion/', icon: 'settings' },
  ];

}
