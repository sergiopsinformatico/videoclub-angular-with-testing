import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class TranslateVideoclubService {

  activeLang: string;

  constructor(private translate: TranslateService) {
    this.activeLang = navigator.language;
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
  }

  changeLanguage (lang: string){
    this.activeLang = lang;
    this.translate.use(this.activeLang);
  }

}