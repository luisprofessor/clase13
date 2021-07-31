import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {
//icono:string="heart-outline";
//private estado:boolean=false;
favorito:boolean=true;  

constructor() { }

  ngOnInit() {
  }

  onClick(){

    /*
    if(!this.estado){

      this.icono="heart";
      this.estado=true;
    }else{
      this.icono="heart-outline";
      this.estado=false;
    }
    */
    this.favorito=!this.favorito;
  }
}
