import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-films-management',
  templateUrl: './films-management.component.html',
  styleUrls: ['./films-management.component.css']
})
export class FilmsManagementComponent {

  constructor(protected translate: TranslateService){

  }

}
