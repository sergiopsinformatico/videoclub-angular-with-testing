import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { LoggerService } from "./logger.service";


@Injectable({
  providedIn: 'root'
})

export class UsersService {

    listUsers: User[] = [];
    isListLoaded: boolean = false;

    constructor(private loggerService: LoggerService){
        this.loadListUsers();
    }

    updateUser(user: User){
        let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
        this.listUsers.splice(indexFound, 1);
        this.listUsers.push(user);
        this.loggerService.loggerUpdateMessage('Actualizado el recurso');
    }

    deleteUser(user: User){
        let indexFound = this.listUsers.findIndex(eUser => eUser && eUser.id && user && user.getId() && eUser.id == user.getId());
        this.listUsers.splice(indexFound, 1);
        this.loggerService.loggerDeleteMessage('Eliminado el recurso');
    }

    createUser(user: User){
        this.listUsers.push(user);
        this.loggerService.loggerInsertMessage('Insertado el recurso');
    }

    getUser(idUser: any): any{
        this.loggerService.loggerReadMessage('Leido el recurso');
        return (this.listUsers.find(eUser => eUser && eUser.getId() && eUser.getId() === idUser)) ?
               (this.listUsers.find(eUser => eUser && eUser.getId() && eUser.getId() === idUser)) :
               (null);
    }

    //Rellenamos lista

    loadListUsers(){
        if(!this.isListLoaded){
            this.listUsers = [];
            this.listUsers.push(new User({
                "id": "0001",
                "name": "Luis",
                "familyName": "Sanchez",
                "birthdate": "19/02/1993",
                "address": "Calle Travesia, 24, Toledo",
                "phone": "11223344"
            }));
            this.listUsers.push(new User({
                "id": "0002",
                "name": "Juanjo",
                "familyName": "Cardenas",
                "birthdate": "25/04/2000",
                "address": "Calle del Alamo, 2, Toledo",
                "phone": "00119922"
            }));
            this.listUsers.push(new User({
                "id": "0003",
                "name": "Carlos",
                "familyName": "Jimenez",
                "birthdate": "11/12/2004",
                "address": "Calle Desengaño, 21, Ciudad",
                "phone": "99887766"
            }));
            this.isListLoaded = true;
        }
    }

}