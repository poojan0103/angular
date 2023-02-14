import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  users(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  user()
  {
    return[
      {name:'anil',age:28},
      {name:'ram',age:30},
      {name:'shyam',age:31},
      
    ]
  }
}
