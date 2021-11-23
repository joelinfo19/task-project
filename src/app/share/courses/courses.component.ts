import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public cycle: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public changeCycle(num_cycle: number){
    this.cycle = num_cycle;
  }

}
