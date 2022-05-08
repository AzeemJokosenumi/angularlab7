import { Component, OnInit } from '@angular/core';
import {ServicesStudentService} from './services-student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-app';
  students:any = [];
  weather:any = [];

  constructor(private service:ServicesStudentService){

  }

    ngOnInit() {
      this.service.GetStudentData().subscribe( (data)=>{

      this.students = data.students;
      console.log(this.students);
    } );

    this.service.GetWeatherData().subscribe((data)=>{
      this.weather = data.weather;
      console.log(this.weather);
    });
    }

}
