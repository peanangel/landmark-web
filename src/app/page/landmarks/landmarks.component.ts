import { Component } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { AppdataService } from 'src/app/service/appdata.service';
import jsonData from '../../../assets/landmark.json'
import { Router } from '@angular/router'
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent {
  landmarks = jsonData;
  landmark: any;
  countrySet = new Set<string>();
  countries : any;
  country ='';
  landmarksByCountry = new Array<any>();
  isMultiple = false;
  // ---------------
  isName = false;
  landmarksName = new Array<any>();

  constructor(private router : Router, private data : AppdataService){
    this.landmarksByCountry = this.data.landmarkByCountry;
    this.landmarksName = this.data.landmarkName;
    this.isMultiple = this.data.isMultiple;

    this.landmark = this.data.landmark;
    this.isName = this.data.isName

    if(this.landmark.idx == 0){
      this.landmark  = this.landmarks[0];
    }
    this.landmark = this.landmarks[0];
    this.landmarks.forEach(element => {
    this.countrySet.add(element.country);
    });
    this.countries = Array.from(this.countrySet);
  }

  searchByCountry(){
    this.landmarksByCountry = new Array<any>();
    this.landmarks.forEach(element =>{
      if(element.country == this.country){
        this.landmarksByCountry.push(element);
      }
    });
    this.landmark = this.landmarksByCountry[0];
    this.isMultiple=true;
    this.isName = false;
  }

  Search(id : any){
    for(let index = 0;index < this.landmarks.length;index++){
      if(this.landmarks[index].idx == id){
        this.landmark = this.landmarks[index];
        break;
      }
    }
    this.isMultiple=false;
    this.isName =false;

  }
  SearchName(nameSearch : any){
    console.log(nameSearch);

    this.landmarksName = new Array<any>();
    this.landmarks.forEach(element => {
      if(element.name.search(nameSearch) != -1){
        this.landmarksName.push(element);
        console.log(this.landmarksName)
      }
      this.isName = true;
    });
    this.landmark = this.landmarksName[0];
    console.log(this.landmark)

  }


  selectCountry(selectedLandmark : any){
    this.data.landmark = selectedLandmark;
    this.data.landmarkByCountry = this.landmarksByCountry;
    this.data.isMultiple = this.isMultiple;
    this.router.navigateByUrl('/show');
  }


  selectCountryName(selectedCountryName : any){
    this.data.landmark = selectedCountryName;
    this.data.landmarkName = this.landmarksName;
    this.data.isName = this.isName;
    this.router.navigateByUrl('/show');
  }
}
