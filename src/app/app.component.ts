import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  rutas:Observable<Componente[]>;
  constructor(private menuController:MenuController, private dataService:DataService) { }

  ngOnInit() {
    this.rutas=this.dataService.getMenuOpts();
  }
}
