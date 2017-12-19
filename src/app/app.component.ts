import {Component,OnInit} from '@angular/core';
import {MatIconModule, MatListModule,MatInputModule} from '@angular/material';
import {MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog'
import {DomSanitizer} from '@angular/platform-browser';
import {ContactService} from './service/contact.service'
import 'rxjs/add/operator/filter';
//import {a} from 'assert';
import {DialogComponent} from './dialog/dialog.component';
import {DialogExport} from './dialog/dialog.component'
/** 
 * @title Basic datepicker
 */

declare var require: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})


export class AppComponent implements OnInit {
  static config: any;
  fullImagePath: string;
  filePath: string;
  calogo : string;
  gitlogo : string;
  dialogRef : DialogComponent;
  
   
    ngOnInit() {
    }

  intro = "I am Meghana Madineni, pursuing Masters in Computer Science at University of Florida. I am a software developer with wild imagination and big dreams. I am a foodie and a good cook. I like to paint and decorate my wall. I love to travel."
  prof_exp = "Worked for two years as a software developer at CA Technologies, Hyderabad with the product development team of CA Workload Automation AutoSys-an automated job control system that lets you manage workload (scheduling, monitoring, and reporting). There, I worked on RESTful Web services, integrated HADOOP job types and implemented Single Sign-On Wallets with Certificates for Database Access for Oracle."
  projects = [
    {
      name: 'Compiler',
      link: 'https://github.com/meghanamadineni/Compiler',
      description: 'Implemented a compiler for a small programming language. Target language is java bytecode. ASM bytecode framework is used for bytecode generation. ASM bytecode framework is written in java and uses visitor-based approach to generate bytecode.'
    },

    {
      name: 'Machine Translator',
      link: '',
      description: 'Implemented a machine translator. It helps in translating Spanish to English. This employs a Recurrent Neural Network with backpropogation. Word2Vec library is implemented. In orderto update the weights, adagrad is implemented.'
    },

    {
      name: 'Professional Website',
      link: '',
      description: ''
    },
    {
      name: 'Top Social Media Hashtags',
      link: 'https://github.com/meghanamadineni/TopHashtagsWithFibonacciHeaps',
      description: 'Implemented a system to find the n most popular hashtags appeared on social media such as Facebook or Twitter. For the scope of this project, hashtags will be given from an input file. Basic idea for the implementation is to use a max priority structure to find out the most popular hashtags. The max priority data structure used is Fibonacci heap.'
    },
    {
      name: 'Steganography',
      link: 'https://github.com/meghanamadineni/SteganographyJPy',
      description: 'Steganography is the science of hiding information. This project is about hiding the text within an image. The least significant bits of pixels of an image are modified to store the text. It is built with Java and Python GUI Programming (Tkinter). For the scope of this project, it only supports the BMP file format (bitmap image file).'
    },
  ];

  public isDarkTheme = false;

  constructor(iconRegistry: MatIconModule, sanitizer: DomSanitizer, private dialog: MatDialog, private contactService: ContactService) {
    this.fullImagePath = './assets/71753.jpg'
    this.filePath = './assets/MeghanaMadineni.pdf'
    this.calogo = './assets/logo-ca-technologies.png'
   
    this.gitlogo = './assets/GitHub-Mark-32px.png'
    

  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    DialogExport.isDarkThemeDialog = this.isDarkTheme;
  
    if(this.isDarkTheme)
    {
      this.gitlogo = './assets/GitHub-Mark-Light-32px.png';}
       else 
       this.gitlogo = './assets/GitHub-Mark-32px.png'; 
  }

  openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(contact=>{this.contactService.addContact(contact).subscribe();
    });
      
  }

 

}
