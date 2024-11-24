import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class LoggerService{

    loggerInsertMessage(message: any){
        console.log('LOG INSERT: ' + message);
    }

    loggerUpdateMessage(message: any){
        console.log('LOG UPDATE: ' + message);
    }

    loggerReadMessage(message: any){
        console.log('LOG READ: ' + message);
    }

    loggerDeleteMessage(message: any){
        console.log('LOG DELETE: ' + message);
    }

  }