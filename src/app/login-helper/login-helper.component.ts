import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DynamicScriptLoaderService } from './../shared/services/dynamic-script-loader.service';
declare var googleyolo: any;

@Component({
  selector: 'app-login-helper',
  templateUrl: './login-helper.component.html',
  styleUrls: ['./login-helper.component.css']
})
export class LoginHelperComponent implements OnInit {

  constructor(private scriptLoader: DynamicScriptLoaderService) { }

  ngOnInit(): void {
    // const googleyolo_url = 'https://smartlock.google.com/client';

    // this.scriptLoader.load(googleyolo_url)
    //   .then(() => {
    //     googleyolo.setTimeouts(5000);
    //     this.openCredentialSelector();
    //   });

    this.openCredentialSelector();
  }

  openCredentialSelector() {
    googleyolo.hint({
      supportedAuthMethods: ['https://accounts.google.com'],
      supportedIdTokenProviders: [{
        uri: 'https://accounts.google.com',
        clientId: environment.GOOGLE_API_CLIENT_ID
      }]
    }).then((credential: any) => {
      console.log('credential:', credential);
    }, (error: any) => {
      // if (error.type === 'noCredentialsAvailable') {
      //   console.log('noCredentialsAvailable -> show login');
      // } else {
      console.log('error:', error);
      // }
    });
  }

  closeCredentialsSelector() {
    googleyolo.cancelLastOperation().then(() => {
      console.log('Credential selector closed.');
    });
  }

  signOut() {
    googleyolo.disableAutoSignIn().then(() => {
      console.log('Auto sign-in disabled. SIGN OUT');
    });
  }
}
