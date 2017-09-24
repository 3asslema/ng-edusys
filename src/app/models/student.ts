import { User } from './user';
import { Contact } from './contact';
export class Student extends User{
    constructor(){
        super();
    }
    public extra_fields = {
        birthdate:null,
        gender: null,
    }
}

