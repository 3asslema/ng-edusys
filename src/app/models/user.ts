import { Contact } from './contact';
export class User {
    public name: string;
    public email: string;
    public password: string;
    public settings: string;
    public contacts: Array<Contact>;
    public isActive: false;
    public extraFields: {
    }
}
