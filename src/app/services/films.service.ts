import { Injectable } from "@angular/core";
import { Film } from "../models/film.model";


@Injectable({
  providedIn: 'root'
})

export class FilmsService{

    listFilms: any[] = [];
    isListLoaded: boolean = false;

    constructor(){
        this.loadListFilms();
    }

    //Rellenamos lista

    loadListFilms(){
        if(!this.isListLoaded){
            this.listFilms = [];
            this.listFilms.push(new Film({
                "id": "HP01",
                "title": "Harry Potter y la Piedra Filosofal",
                "year": "2001",
                "director": "Chris Columbus",
                "actors": ["Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Harris, Maggie Smith, Alan Rickman, Robbie Coltrane"], 
                "isRent": true
            }));
            this.listFilms.push(new Film({
                "id": "TITANIC",
                "title": "Titanic",
                "year": "1997",
                "director": "James Cameron",
                "actors": ["Leonardo Dicaprio, Kate Winslet, Billy Zane, Katy Bates, Frances Fisher, Gloria Stuart, Bill Paxton"], 
                "isRent": false
            }));
            this.listFilms.push(new Film({
                "id": "ESDLA01",
                "title": "El Señor de Los Anillos: La Comunidad del Anillo",
                "year": "2001",
                "director": "Peter Jackson",
                "actors": ["Elijah Wood, Ian McKellen, Viggo Mortensen, Sean Astin, Sean Bean, Christopher Lee, Andy Serkis"], 
                "isRent": true
            }));
            this.isListLoaded = true;
        }
    }

}