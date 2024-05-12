import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  simpleForm: {name: string, body: string} = {name: '', body: ''};
  constructor(
    private communicationService: CommunicationService
  ) {}


  sendMessage() {
    this.communicationService.sendMessage(this.simpleForm);
    this.simpleForm = {name: '', body: ''}; //Initialize the object -> empty Form
  }
}
