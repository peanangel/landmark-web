import { Component } from '@angular/core';
import { AppdataService } from 'src/app/service/appdata.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  landmark : any;
  constructor(private data : AppdataService,private router : Router){
    this.landmark = data.landmark;
    console.log(this.landmark);

  }
  back(){
    this.router.navigateByUrl('/')
  }
}
