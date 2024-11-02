export class Film {

    id: any = '';
    title: any = '';
    year: any = '';
    director: any = '';
    actors: any[] = [];
    isRent: boolean = false;
    
    constructor(objJSON: any){
        if(objJSON != null){
            this.setId(objJSON.id);
            this.setTitle(objJSON.title);
            this.setYear(objJSON.year);
            this.setDirector(objJSON.director);
            this.setActors(objJSON.actors);
            this.setIsRent(objJSON.isRent);
        }
    }

    setId(id: any){
        this.id = id;
    }

    getId(): any{
        return this.id;
    }

    setTitle(title: any){
        this.title = title;
    }

    getTitle(): any{
        return this.title;
    }

    setYear(year: any){
        this.year = year;
    }
    
    getYear(): any{
        return this.year;
    }

    setDirector(director: any){
        this.director = director;
    }

    getDirector(): any{
        return this.director;
    }

    setActors(actors: any[]){
        this.actors = actors;
    }

    getActors(): any[]{
        return this.actors;
    }

    setIsRent(isRent: boolean){
        this.isRent = isRent;
    }

    getIsRent(): boolean{
        return this.isRent;
    }

}