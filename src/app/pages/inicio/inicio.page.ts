import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

rutas:Observable<Componente[]>;


  // rutas:any[]=[
  //   {
  //     titulo:'Alert',
  //     ruta:'/alert'
  //   },
  //   {
  //     titulo:'Action-Sheet',
  //     ruta:'/action-sheet'
  //   }
  // ]
  constructor(private menuController:MenuController, private dataService:DataService) { }

  ngOnInit() {
    this.rutas=this.dataService.getMenuOpts();
  }

  abrirMenu(){

    //Le paso el id del menú que deseo abrir
    this.menuController.open('first');
  }
}
