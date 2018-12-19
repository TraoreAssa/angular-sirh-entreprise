import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //a partir de la racine 
})
export class MessagesService {

  message: string[] = [];

  add(messages:string){
    this.message.push(messages);
  }

  clear(){
    this.message = [];
  }
  
  constructor() { }
}
