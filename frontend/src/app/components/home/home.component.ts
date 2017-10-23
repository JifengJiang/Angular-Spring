import { Component, OnInit } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { SidePanelComponent } from '../side-panel/side-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
