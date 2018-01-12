import {Component, OnInit} from '@angular/core';
import { MessagesLoadService} from '../../services/messages-load.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages;

    constructor(private _messagesLoadService: MessagesLoadService) {
        this.messages = this._messagesLoadService.getMessages();
    }

    ngOnInit() {
    }

}
