import { Component, OnInit } from '@angular/core';
declare var googleyolo: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RDM';

  ngOnInit() {
    this.openCredentialSelector();


  }

  openCredentialSelector() {
    googleyolo.hint({
      supportedAuthMethods: ['https://accounts.google.com'],
      supportedIdTokenProviders: [{
        uri: 'https://accounts.google.com',
        clientId: '102521934122-c5bttnme71ek39u67api26a49ih1ad56.apps.googleusercontent.com'
      }]
    }).then((credential) => {
      console.log('credential:', credential);
    }, (error) => {
      console.log('error:', error);
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
