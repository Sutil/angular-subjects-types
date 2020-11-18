import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SubjectServiceService {
  readonly s$ = new Subject<string>();
  readonly as$ = new AsyncSubject<string>();
  readonly bs$ = new BehaviorSubject<string>("fist value");
  readonly rs$ = new ReplaySubject<string>(3);

  constructor() {}
}
