import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appUsers = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'assets/icon/baseline-dashboard-24px.svg'
    },
    {
      title: 'Custeomer',
      url: '/#',
      icon: 'assets/icon/baseline-people-24px.svg'
    },
    {
      title: 'Order',
      url: '/#',
      icon: 'assets/icon/baseline-add_shopping_cart-24px.svg'
    },
    {
      title: 'Espenses',
      url: '/#',
      icon: 'assets/icon/baseline-attach_money-24px.svg'
    },
    {
      title: 'Purchase',
      url: '/#',
      icon: 'assets/icon/baseline-shopping_cart-24px.svg'
    },
    {
      title: 'Product',
      url: '/product',
      icon: 'assets/icon/baseline-business_center-24px.svg'
    },
    {
      title: 'Report',
      url: '/#',
      icon: 'assets/icon/baseline-pie_chart-24px.svg'
    }
    ];
    public appAdmin = [
    {
      title: 'Manage users',
      url: '/#',
      icon: 'assets/icon/baseline-person-24px.svg'
    },
    {
      title: 'Manage Order status',
      url: '/#',
      icon: 'assets/icon/baseline-note_add-24px.svg'
    },
    {
      title: 'Manage measurement',
      url: '/#',
      icon: 'assets/icon/baseline-assignment-24px.svg'
    },
    {
      title: 'Manage style',
      url: '/#',
      icon: 'assets/icon/baseline-style-24px.svg'
    },
    {
      title: 'Manage material type',
      url: '/#',
      icon: 'assets/icon/baseline-local_mall-24px.svg'
    }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
