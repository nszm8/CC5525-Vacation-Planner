import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  numberOfDays: number = 0;
  destination: string = '';
  vactionPlans: any[] = [];
  vacationActivities: any;

  constructor(private router: Router,private http: HttpClient) {}

  vacationDetails()
    {
      let headers = new HttpHeaders({
        'x-rapidapi-host': 'ai-trip-planner.p.rapidapi.com',
        'x-rapidapi-key': 'fb4362bc11mshd9c08352a7e2038p1b7338jsn1434173b1a3d'
      });

      const params = new HttpParams().set
                  ('days', this.numberOfDays).set('destination', this.destination);

      this.http.get('https://ai-trip-planner.p.rapidapi.com/', {
				headers: headers, params: params
			})
			.subscribe((data: any) => {
        var row=0;
        for(var i=0; i<data.plan.length; i++){
            for(var j=0;j<data.plan[i].activities.length; j++){
              var json ={day:String, time: String, description:String};
              json.day = data.plan[i].day;
              json.time = data.plan[i].activities[j].time;
              json.description = data.plan[i].activities[j].description;
              this.vactionPlans.push(json);
            }
        }
				console.log(this.vactionPlans);
			});
    }
}
