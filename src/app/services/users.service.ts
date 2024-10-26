import { Injectable } from "@angular/core";
import { HttpVideoclubService } from "./http-videoclub.service";
import { User } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})

export class UsersService {

    listUsers: any[] = [];
    isListLoaded: boolean = false;

    constructor(private httpVideoclub: HttpVideoclubService){
        this.loadListUsers();
    }

    loadListUsers(){
        if(!this.isListLoaded){
            this.httpVideoclub.getFile('assets/documents/users.json').subscribe(objListUsers => {
                let list: any = objListUsers;
                list.listUsers.forEach((eUser: any) => {
                    this.listUsers.push(new User(eUser));
                });
                this.isListLoaded = true;
            });
        }
    }

    updateUser(user: User){
        let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
        this.listUsers.splice(indexFound, 1);
        this.listUsers.push(user);
    }

    deleteUser(user: User){
        let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
        this.listUsers.splice(indexFound, 1);
    }

    createUser(user: User){
        this.listUsers.push(user);
    }

}