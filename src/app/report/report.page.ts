import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable, Subscription} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
    gvt = [
        "Airports",
        "Banking",
        "ZIMRA",
        "Electricity and Power Supply",
        " Food, Civil Supplies and Consumer Affairs",
        "Foreign Trade",
        "Health and Family Welfare",
        "Insurance",
        "Judiciary",
        "Labour",
        "Municipal Services",
        "Passport",
        "Police",
        "Public Works Department",
        "Social Welfare",
        "Transport",
        "Urban Development Authorities",
        "Water and Sewage"];
    provinces = ['Harare', 'Bulawayo', 'Manicaland', 'Mashonaland Central', 'Mashonaland East', 'Mashonaland West', 'Masvingo', 'Midlands' , 'Matabeleland North', 'Matabeleland South'];
    gvnt: any;
    province: any;
    amount: any;
    details: any;
    private loading: any;
    file: any = null;
    private uploadPercent: Observable<number | undefined>;
    private upload: Subscription;
    private downloadURL: Observable<any>;

    constructor(
        // private camera: Camera,
        private http: HttpClient,
        private storage: AngularFireStorage,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        if (this.details) {

            const data = {
                province: this.province,
                details: this.details,
                government: this.gvnt,
                file: this.file,
                amount: this.amount,
            };


            this.loader("Submitting");
            this.http.post('https://formspree.io/f/mnqldada', {
                email: 'mashvee@gmail.com',
                replyto: 'mashvee@gmail.com',
                data: JSON.stringify(data)
            })
                .subscribe(res => {
                    this.dismiss();
                    this.toast('Thank you your feedback has been submitted', 'success')
                    this.navCtrl.pop()
                }, error1 => {
                    this.dismiss();
                    this.toast('Something went wrong please try again', 'danger')


                })
        } else {
            this.toast('Corruption details required', 'danger')

        }

    }

    async loader(msg) {
        this.loading = await this.loadingCtrl.create({
            message: msg
        });
        await this.loading.present()
    }

    dismiss() {
        this.loading.dismiss()

    }

    async toast(msg, color) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            color: color
        });
        await toast.present()
    }


    choseFile(e) {
        //  this.file= 'file';

    }


    delete() {
        this.storage.storage.refFromURL(this.file).delete();
        this.file = null


    }

     uploadFile(event) {
    const file = event.target.files[0];
    if (file.size > 20485760) {
    this.toast('file is too big (max. 20 Mb)','danger');


} else {
    this.loader('Uploading..');
    const filePath = Date.now().toString();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available

    this.upload = task.snapshotChanges().pipe(
        finalize(() => {
                this.downloadURL = fileRef.getDownloadURL();
                fileRef.getDownloadURL().subscribe(x => {
                    console.log(x);
                    this.file = x;

                    this.dismiss()


                });
            }
        ))
        .subscribe()


}

}



}


