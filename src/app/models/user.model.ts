export class User {

    id: string = '';
    name: string = '';
    familyName: string = '';
    birthdate: string = '';
    address: string = '';
    
    constructor(objJSON: any){
        if(objJSON != null){
            this.setId(objJSON.id);
            this.setName(objJSON.name);
            this.setFamilyName(objJSON.familyName);
            this.setBirthdate(objJSON.birthdate);
            this.setAddress(objJSON.address);
        }
    }

    setId(eId: string){
        this.id = eId;
    }

    getId(): string{
        return this.id;
    }

    
    setName(eName: string){
        this.name = eName;
    }

    getName(): string{
        return this.name;
    }

    
    setFamilyName(eFamilyName: string){
        this.familyName = eFamilyName;
    }

    getFamilyName(): string{
        return this.familyName;
    }

    
    setBirthdate(eBirthdate: string){
        this.birthdate = eBirthdate;
    }

    getBirthdate(): string{
        return this.birthdate;
    }

    
    setAddress(eAddress: string){
        this.address = eAddress;
    }

    getAddress(): string{
        return this.address;
    }

}