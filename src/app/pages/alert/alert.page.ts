import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController:AlertController ) { }

  ngOnInit() {
  }

  onClick(){

   //this.presentAlertConfirm();
   this.presentAlertPrompt();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'rojo',
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'rojo',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'Apellido',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'Observaciones',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'Web',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'Fecha de Ingreso',
          type: 'date',
          min: '2017-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'Fecha de Nacimiento',
          type: 'date'
        },
        {
          name: 'Edad',
          type: 'number',
          min: 0,
          max: 99
        },
        {
          name: 'DNI',
          type: 'number'
        },
        {
          name: 'Clave',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok',data.Apellido);
          }
        }
      ]
    });

    await alert.present();
  }
}
