import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

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
  showPanelDeleteUser: boolean = false;
  objUserForPanel: User = new User(null);

  constructor(protected translate: TranslateService,
              protected usersService: UsersService
  ){}

  ngOnInit(): void {
    this.listUsers = this.usersService.listUsers;
  }

  //VISTA

  openPanelViewUser(user: User){
    this.objUserForPanel = user;
    this.showPanelViewUser = true;
  }

  //ELIMINAR

  openPanelDeleteUser(user: User){
    this.showPanelDeleteUser = true;
    this.objUserForPanel = user;
  }

  deleteUser(){
    this.usersService.deleteUser(this.objUserForPanel);
  }

  //EDICION

  openPanelEditUser(user: User){
    this.showPanelEditUser = true;
    this.objUserForPanel = user;
  }

  updateUser(){
    this.showPanelEditUser = false;
    this.usersService.updateUser(this.objUserForPanel);
  }

  //CREACION

  createUser(){
    this.showPanelNewUser = true;
    this.objUserForPanel = new User(null);
  }

  savePatient(){
    this.showPanelNewUser = false
    this.usersService.createUser(this.objUserForPanel);
  }

}
