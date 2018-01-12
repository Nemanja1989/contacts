import { Injectable } from '@angular/core';

@Injectable()
export class MessagesLoadService {

    constructor() { }

        public getMessages() {
            return [
                {
                    title: 'John',
                    content: 'Doe'
                },
                {
                    title: 'asd',
                    content: 'Dowefwefwefwefe'
                },
                {
                    title: 'title2',
                    content: 'Dasfwe fwef oe'
                },
                {
                    title: 'Jowefhn',
                    content: 'Do wefw efwe fe'
                },
                {
                    title: 'Johwen',
                    content: 'Do ewf wefwefwef wee'
                }
            ];
        }
}
