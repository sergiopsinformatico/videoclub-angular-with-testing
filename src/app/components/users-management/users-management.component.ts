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
  showPanelNewUser: boolean = false;
  showPanelEditUser: boolean = false;
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

  //VISTA

  viewUser(user: User){
    this.objUserForPanel = user;
    this.showPanelViewUser = true;
  }

  //ELIMINAR

  deleteUser(user: User){
    let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
    this.listUsers.splice(indexFound, 1);
  }

  //EDICION

  editUser(user: User){
    this.showPanelEditUser = true;
    this.objUserForPanel = user;
  }

  saveChanges(){
    this.showPanelEditUser = false;
    let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && this.objUserForPanel && this.objUserForPanel.getId() && eUser.id == this.objUserForPanel.getId());
    this.listUsers.splice(indexFound, 1);
    this.listUsers.push(this.objUserForPanel);
  }

  //CREACION

  createUser(){
    this.showPanelNewUser = true;
    this.objUserForPanel = new User(null);
  }

  savePatient(){
    this.showPanelNewUser = false
    this.listUsers.push(this.objUserForPanel);
  }

}
