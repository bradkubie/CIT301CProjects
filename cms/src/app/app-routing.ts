import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {MessagesComponent} from "./messages/messages.component";
import {MESSAGE_ROUTES} from "./messages/message-routes";
import {DOCUMENT_ROUTES} from "./documents/document-routes";
import {CONTACT_ROUTES} from "./contacts/contact-routes";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent, children: CONTACT_ROUTES},
  { path: 'documents', component: DocumentsComponent, children: DOCUMENT_ROUTES},
  { path: 'messages', component: MessagesComponent, children: MESSAGE_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
