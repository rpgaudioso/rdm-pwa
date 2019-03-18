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
    console.log('on inti');
    const hintPromise = googleyolo.hint({
      supportedAuthMethods: [
        'https://accounts.google.com'
      ],
      supportedIdTokenProviders: [
        {
          uri: 'https://accounts.google.com',
          clientId: '102521934122-c5bttnme71ek39u67api26a49ih1ad56.apps.googleusercontent.com'
        }
      ]
    });
  }
}
