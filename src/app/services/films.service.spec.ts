import { Film } from "../models/film.model";
import { FilmsService } from "./films.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('FilmsService', () => {

    let loggerSpy: LoggerService, filmsService: FilmsService, newFilm: Film;

    beforeEach(() => {
        loggerSpy = new LoggerService();
        spyOn(loggerSpy, 'loggerInsertMessage');

        TestBed.configureTestingModule({
            providers: [
                FilmsService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });

        filmsService = TestBed.get(FilmsService);

        newFilm = new Film({
            "id": "HP02",
            "title": "Harry Potter y la Camara Secreta",
            "year": "2002",
            "director": "Chris Columbus",
            "actors": ["Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Harris, Maggie Smith, Alan Rickman, Robbie Coltrane"], 
            "isRent": true
        });
        console.log("-- Films: Load BeforeEach --");
    })

    it('Films -> Test 01: Create film', () => {
        console.log("-- Films -> Test 01: Create film --");
        filmsService.createFilm(newFilm);
        expect(filmsService.getFilm(newFilm.getId()).getId()).toBe(newFilm.getId());
        expect(loggerSpy.loggerInsertMessage).toHaveBeenCalledTimes(1);
        filmsService.deleteFilm(newFilm);
    });

});