import {Injectable} from '@angular/core';

@Injectable()
export class ContactsService {

    constructor() {

    }

    static getContacts() {
        return [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com'
            },
            {
                firstName: 'Daniel',
                lastName: 'Ros',
                email: 'daniel@example.com'
            },
            {
                firstName: 'Martin',
                lastName: 'Hess',
                email: 'martin@example.com'
            },
            {
                firstName: 'Martin',
                lastName: 'Hessaa',
                email: 'martin@example.com'
            },
            {
                firstName: 'Nemanja',
                lastName: 'Bojanic',
                email: 'nemanjabojanic@example.com'
            }
        ];
    }

}
