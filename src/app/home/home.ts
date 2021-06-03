import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AlertController, IonRouterOutlet, NavController, Platform} from '@ionic/angular';

import {TranslateService} from '@ngx-translate/core';
import {GetterSetterService} from '../getter-setter.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: [
    './styles/home.page.scss',
    './styles/home.shell.scss',
    './styles/home.ios.scss',
    './styles/home.md.scss'
  ],
})
export class HomePage implements OnInit {
    private subscription: Subscription;

    ngOnInit(): void {

    }


    data: any = [{image:'./assets/images/icon.png',text:'Report',page:'/report'},
        {image:'./assets/images/about.png',text:'About',page:'/about'},
        {image:'./assets/images/where.png',text:'Where to report',page:'/where'},
        {image:'./assets/images/question.png',text:'About the App',page:'/ask'}];

    private lat: number;
    private lon: number;


    constructor(
        private route: ActivatedRoute,
        private platform:Platform,
        public translate: TranslateService,
        private router: Router,
        private routerOutlet: IonRouterOutlet,
        private navCtrl: NavController,
        private getter: GetterSetterService,
        public alertController: AlertController,
    ) {
        this.platform.backButton.subscribeWithPriority(-1, () => {
            if (!this.routerOutlet.canGoBack()) {
                navigator['app'].exitApp();
            }
        });
    }





    al() {
        //  alert('da')
    }

    openDetail(value) {
        this.getter.setParams(value)
        this.router.navigateByUrl('/tour-detail')
    }


}
