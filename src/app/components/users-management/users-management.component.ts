import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpVideoclubService } from '../../services/http-videoclub.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit{

  listUsers: User[] = [];

  showPanelViewUser: boolean = false;
  objUserForPanel: User = new User(null);

  constructor(protected translate: TranslateService,
              protected httpVideoclub: HttpVideoclubService
  ){}

  ngOnInit(): void {
    this.loadListUsers();
  }

  loadListUsers(){
    this.httpVideoclub.getFile('assets/documents/users.json').subscribe(objListUsers => {
      let list: any = objListUsers;
      list.listUsers.forEach((eUser: any) => {
        this.listUsers.push(new User(eUser));
      });
    });
  }

  viewUser(user: User){
    this.objUserForPanel = user;
    this.showPanelViewUser = true;
  }

  deleteUser(user: User){
    let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
    this.listUsers.splice(indexFound);
  }

  editUser(user: User){

  }

}
