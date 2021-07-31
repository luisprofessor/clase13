import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingController: LoadingController) { }

  loading:HTMLIonLoadingElement;
  ngOnInit() {
  }

  mostrarLoading(){

    this.presentLoading('Espere por favor');
    
    //Simularemos una tarea que dura 2 segundos
    setTimeout(() =>{

      this.loading.dismiss();
    },2000);
  }

  async presentLoading(mensaje:string) {
    this.loading = await this.loadingController.create({
     
      message: mensaje,
     
    });
    await this.loading.present();

   
}
}
