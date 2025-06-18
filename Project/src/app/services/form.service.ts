import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  name? : String;
  email? : String;
  password? : String;
  constructor() { }
}
