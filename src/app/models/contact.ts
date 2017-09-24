import { User } from './user';
export class Contact extends User {
    constructor(){
        super();
    }
    public extra_fields= {
        mobile_phone:null,
        cin: null,
    }
}
