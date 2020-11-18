import { Component, OnInit } from "@angular/core";
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";
import { SubjectServiceService } from "../subject-service.service";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"]
})
export class SubjectComponent implements OnInit {
  value = "first value";

  constructor(private subjectService: SubjectServiceService) {}

  ngOnInit() {}

  onInput(event) {
    this.value = event.target.value;
  }

  send() {
    this.subjectService.s$.next(this.value);
    this.subjectService.as$.next(this.value);
    this.subjectService.bs$.next(this.value);
    this.subjectService.rs$.next(this.value);
    this.value = "";
  }

  get sub() {
    return this.subjectService.s$.observers.length;
  }

  complete() {
    this.subjectService.as$.complete();
  }
}
