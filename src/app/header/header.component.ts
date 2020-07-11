import { Component, OnInit, OnDestroy } from '@angular/core';
import { Candidate } from '../candidate';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

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
