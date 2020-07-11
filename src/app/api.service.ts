import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from './candidate';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  candidatesUrl = "http://localhost:3004/candidates";

  constructor(private http:HttpClient) { }

  getCandidates() {
    return this.http.get<Candidate[]>(this.candidatesUrl);
  }

  getCandidateById(id:number){
    return this.http.get<Candidate[]>(`http://localhost:3004/candidates/${id}`)
    .pipe(
      map(res => res)
    );
  }

}
