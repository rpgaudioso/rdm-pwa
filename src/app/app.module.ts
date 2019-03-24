import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from "angular-6-social-login";
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginHelperComponent } from './login-helper/login-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHelperComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      // {
      //   id: FacebookLoginProvider.PROVIDER_ID,
      //   provider: new FacebookLoginProvider('Your-Facebook-app-id')
      // },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('45938155579-jl7lg8r0le2rf13edtidqktc63l57qv4.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}
