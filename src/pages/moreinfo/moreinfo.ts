import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html'
})
export class MoreInfoPage {
  private link: string;

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private emailComposer: EmailComposer) {
   
  }

  itemTapped(event, item) {
    switch (item) {
      case 0:
        this.link = "https://www.facebook.com/HoosierOpportunity/";
        this.openBrowser();
        break;
      case 1:
        this.link = "https://twitter.com/HoosierOpp";
        this.openBrowser();
        break;
      case 2:
        this.link = "https://www.youtube.com/channel/UCOiUeS0vVQCDihvA__ZHalw";
        this.openBrowser();
        break;
      case 3:
        this.link = "https://hoosieropportunity.com";
        this.openBrowser();
        break;
      case 4:
        this.openContactUs();      
        break;
      case 5:
        this.link = "https://hoosieropportunity.com/subscribe/careers.php";
        this.openBrowser();
        break;
      default:
        // code...
        break;
    }
    
  }

  openContactUs(){
    let email = {
          to: 'info@hoosieropportunity.com',
          isHtml: true
        };
    this.emailComposer.open(email);
  }

  openBrowser() {
    let browser = this.iab.create(this.link, "_blank", "location=no");

  }
}
