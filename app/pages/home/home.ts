import {Component} from '@angular/core'
import {NavController, AlertController} from 'ionic-angular'

@Component({templateUrl: 'build/pages/home/home.html'})

export class HomePage {

    public showingWelcome: boolean
    public productList: Array<Object>
    private message: Object

    public constructor(private navCtrl: NavController, private alertController: AlertController) {
        this.showingWelcome = true
        this.productList = []
        this.message = {
            title: '+ Add Product',
            message: 'Please specify name and price',
            inputs: [{
                name: 'product',
                placeholder: 'Product Name'
            }, {
                name: 'price',
                placeholder: 'Product Price'
            }],
            buttons: [{
                text: 'Cancel'
            }, {
                text: 'Save',
                handler: this.addProduct()
            }]
        }
    }

    private addProduct() {
        return data => this.productList.push({
            name: data.product,
            price: data.price
        })
    }

    public dismissWelcome() {
        this.showingWelcome = false
    }

    public add() {
        this.alertController.create(this.message).present()
    }

}
