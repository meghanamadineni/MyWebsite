import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Contact } from '../model/contact'
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:8080';

    
 // post("/api/contacts")
//  createContact(newContact: Contact): Promise<Contact> {
// 	let URI = `${this.serverApi}/contact/`;
// 	let headers = new Headers;
// 	headers.append('Content-Type', 'application/json');
// 	return this.http.post(URI, newContact,{headers:headers})
// 			   .toPromise()
// 			   .then(response => response.json() as Contact)
// 			   .catch();
//   }

    	public addContact(contact: Contact) {
  		let URI = `${this.serverApi}/contact/`;
  		let headers = new Headers;
  		 let body = JSON.stringify({name: contact.name, email: contact.email, message: contact.message});
  		headers.append('Content-Type', 'application/json');
  		return this.http.post(URI, body ,{headers: headers})
  		.map(res => res.json());
  	}
}