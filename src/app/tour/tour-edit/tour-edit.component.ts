import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TourService} from '../../service/tour.service';
import {Subscription} from 'rxjs';
import {Tour} from '../../model/tour';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  sub: Subscription;
  tour: Tour = {};
  id: number;
  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });
  }

  ngOnInit() {
  }

  getTour(id: number) {
    this.tourService.findById(id).subscribe (tours => {
      this.tour = tours;
    });
  }

  updateTour() {
    this.tourService.updateTour(this.tour.id, this. tour).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['tour/list']);
    }, e => {
      console.log(e);
    });
  }
}
