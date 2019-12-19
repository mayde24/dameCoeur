import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mayde24/ck4c0b6sj014a1dnu9wrvu8wm';
  lat = 48.851660;
  lng = 2.349353;
  constructor() { }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibWF5ZGUyNCIsImEiOiJjanl0eXZjZnMwNjQwM2RueWQwYzZ2NGw4In0.OuuJ8vXCOEqpm5jtApUJrw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.AttributionControl(), 'top-left');
  }
}
