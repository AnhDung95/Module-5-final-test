import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Tour} from '../../model/tour';
import {TourService} from '../../service/tour.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrls: ['./tour-delete.component.css']
})
export class TourDeleteComponent implements OnInit {
  sub: Subscription;
  tours: Tour = {
    id: 0,
    title: 'title',
    description: 'Mo ta',
    price: 0
  };
  id: number;

  constructor(private tourService: TourService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.sub = this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });
  }
  getTour(id: number) {
    this.tourService.findById(id).subscribe(tours => {
      this.tours = tours;
    });
  }
  deleteTour(id: number) {
    this.tourService.deleteTour(id).subscribe(() => {
      alert('Xoa thanh cong');
      this.router.navigate(['/tours/list']);
    }, e => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

}
