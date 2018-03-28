import { Component, ViewChild, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-router.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  loading = false;
  pageTitle = 'This is.... ANGULAR!'
  links: Object[];

  constructor(public _appRoutingModule: AppRoutingModule) { }

  ngOnInit(){  
    this.links = this._appRoutingModule.getLinkArray();
  }
}
