import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CandidateList: Candidate[];

  constructor(private candidateService : ApiService) {}

  ngOnInit() {
    return this.candidateService.getCandidates().subscribe(data => this.CandidateList = data);
  }

}
