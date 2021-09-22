import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }

  public getGitHub(user:string): any{
    const gh =ajax.getJSON('https://api.github.com/users/' + user);
    const data$ = new Observable(observer => {
      gh.subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });

    return data$;
  }
}
