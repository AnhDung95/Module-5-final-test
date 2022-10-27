import { Component, OnInit } from '@angular/core';
import {TourService} from '../../service/tour.service';
import {Tour} from '../../model/tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
      console.log('abc', tours);
    });
  }

}
