import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Contact } from '../model/contact'
import 'rxjs/add/operator/map';
import {Port}  from '../../../portConf'

@Injectable()
export class ContactService {

    constructor(private http: Http, private port:Port) {}
    
    private serverApi= 'http://localhost:'+this.port.num;

    


    	public addContact(contact: Contact) {
  		let URI = `${this.serverApi}/contact/`;
  		let headers = new Headers;
  		 let body = JSON.stringify({name: contact.name, email: contact.email, message: contact.message});
  		headers.append('Content-Type', 'application/json');
  		return this.http.post(URI, body ,{headers: headers})
  		.map(res => res.json());
  	}
}