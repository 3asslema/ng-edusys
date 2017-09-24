import { Contact } from './contact';
import { Student } from './student';
import { ScolarYear } from './scolar-year';
export class Admission {
    public statusEnum = {
        MISSING_REQUIREMENTS: 'mr',
        PARTIALLY_PAID: 'pp',
        PARTIALLY_PAID_MISSING_REQUIREMENTS: 'ppmr',
        PAID_MISSING_REQUIREMENTS: 'pmr',
        PAID: 'paid',
    };
    public status: string;
    public scolar_year: ScolarYear;
    public tuition_fees = [];
    public student: Student;
    public contact: Contact;
    public facility: any;
    public created_by: any;
    public academic_year: any;

    attachments = {};

}
