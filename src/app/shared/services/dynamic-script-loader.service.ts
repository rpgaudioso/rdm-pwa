import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {

  constructor() { }

  public load(url: string) {

    return new Promise(function (resolve, reject) {

      const script = document.createElement('script');
      script.src = url;

      script.addEventListener('load', function () {
        resolve(script);
      }, false);

      script.addEventListener('error', function () {
        reject(script);
      }, false);

      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
}
