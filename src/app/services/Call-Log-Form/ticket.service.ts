import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  storeIdInLocalStorage(id : string){
    localStorage.setItem('ticketId', id);
  }

  getIdFromLocalStorage() : string{
    return localStorage.getItem('ticketId'); 
  }

  getTicketFromId(id : string) : string{
    return this.zeroAppender(id);
  }

  zeroAppender(input : string) : string {
    return '000000'.substr(0,6-input.length) + input ; 
  }
}
