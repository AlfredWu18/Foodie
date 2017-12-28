import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB5Bqe8DmyGUrjotX7Qsuxc_S7FRrrMjyY',
      authDomain: 'foodie-alfred.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
