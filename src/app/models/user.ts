import { Address } from './address';
import { Contact } from './contact';
export class User {
    public name: string;
    public email: string;
    public password: string;
    public settings: string;
    public contacts: Array<Contact>;
    public address: Address;
    public isActive: false;
    public extra_fields: {
    }
    constructor(){
        this.address = new Address();
        this.address.country = 'Tunisie'
    }
}
