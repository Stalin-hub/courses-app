import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ObsService } from 'src/app/services/obs.service';

@Component({
  selector: 'app-use-multi-obs',
  templateUrl: './use-multi-obs.component.html',
  styleUrls: ['./use-multi-obs.component.css']
})
export class UseMultiObsComponent implements OnInit {

  constructor(public obs: ObsService) { }

  ngOnInit(): void {
    // Simple use of the service obs (get data of users of Git-Hub)
    // this.obs.getGitHub('Stalin-hub').subscribe(
    //   (res: any) => {console.log(res);
    //   }
    // );

    // forkJoin for get data of multiple subscriptions in one object
    // forkJoin(
    //   this.obs.getGitHub('Stalin-hub'),
    //   this.obs.getGitHub('odoo'),
    //   this.obs.getGitHub('angular')
    // ).subscribe(
    //   (res) => {
    //     console.log(res);
    //   }
    // );

    // Check status of the service before execute anything
    this.obs.getGitHub('Stalin-hub').pipe(
      mergeMap((res: any) => ajax(res.blog)),
      // mergeMap((res2: any) => ajax(res2.blog)),
    ).subscribe(
      (final:any) => {
        console.log(final.status);
        
      }
    );
  }

}
