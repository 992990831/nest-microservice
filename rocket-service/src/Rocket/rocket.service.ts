import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class RocketService {
  constructor(private http: HttpService) {}

  getNextLaunchRemainingTime() {
    return this.http.get('https://api.spacexdata.com/v4/launches/next').pipe(
      map((response) => response.data),
      map((launch) => launch.date_utc),
    );
  }
}
