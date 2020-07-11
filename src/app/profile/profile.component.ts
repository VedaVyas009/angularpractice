import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Candidate } from '../candidate';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  CandidateList: Candidate[];
  private sub: any;
  id: number;

  constructor(private route: ActivatedRoute,private candidateService : ApiService) {}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   return this.candidateService.getCandidateById(this.id).subscribe(data => this.CandidateList = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
