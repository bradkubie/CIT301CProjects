import { Component, OnInit } from '@angular/core';
import {Contact} from "./contacts";

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact = null;

  constructor() { }

  ngOnInit() {
  }

}
