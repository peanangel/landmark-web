import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  landmark = new Landmark();
  landmarkByCountry : any;
  isMultiple = false;
  landmarkName :any;
  isName = false;


  constructor() { }
}
class Landmark{
  idx : number = 0;
  name : string = '';
  country : string = '';
  detail : string = '';
  url : string = '';
}
