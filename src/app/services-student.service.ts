import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
   return this.http.get('https://learnonline.gmit.ie/pluginfile.php/608467/mod_resource/content/0/Angular_Lab_6_Http%20%282%29.pdf');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('https://learnonline.gmit.ie/pluginfile.php/608467/mod_resource/content/0/Angular_Lab_6_Http%20%282%29.pdf')
  }
}
