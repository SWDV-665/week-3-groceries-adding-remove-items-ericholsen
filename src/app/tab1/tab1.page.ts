import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App"

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 5
    }
  ]
  constructor(public toastController: ToastController, public alertController: AlertController) {

  }

  async removeItem(item, index) {
    console.log("Removing Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  async addItem() {
    console.log("Adding Item");
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name : 'quantity',
          placeholder: 'Quantity',
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
          text: 'Save',
          handler: (item) => {
            console.log('Confirm Save', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

}
