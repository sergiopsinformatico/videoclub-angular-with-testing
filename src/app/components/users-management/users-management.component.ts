import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpVideoclubService } from '../../services/http-videoclub.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit{

  listUsers: any[] = [];

  constructor(protected translate: TranslateService,
              protected httpVideoclub: HttpVideoclubService
  ){}

  ngOnInit(): void {
    this.loadListUsers();
  }

  loadListUsers(){
    this.httpVideoclub.getFile('assets/documents/users.json').subscribe(objListUsers => {
      let list: any = objListUsers;
      this.listUsers = list.listUsers;
    });
  }

}
