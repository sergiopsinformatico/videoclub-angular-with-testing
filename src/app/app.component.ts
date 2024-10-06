import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateVideoclubService } from './services/translate-videoclub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  langChosen: string = '';
  optionChosen: string = '';

  constructor(protected translate: TranslateService,
              protected configTranslateVideoclub: TranslateVideoclubService
  ){
    this.langChosen = navigator.language;
  }

  changeLanguage(lang: string){
    this.langChosen = lang;
    this.configTranslateVideoclub.changeLanguage(lang);
  }

  openOption(option: string){
    this.optionChosen = option;
  }
  
}
