import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { SubjectServiceService } from "../subject-service.service";

@Component({
  selector: "app-observer",
  templateUrl: "./observer.component.html",
  styleUrls: ["./observer.component.css"]
})
export class ObserverComponent {
  started = false;

  sValue = "";
  asValue = "";
  bsValue = "";
  rsValue = [];
  subscriptions: Subscription[] = [];

  constructor(private subjectService: SubjectServiceService) {}

  toggle() {
    if (this.started) {
      this.stop();
    } else {
      this.start();
    }
  }

  private start() {
    let sub = this.subjectService.s$.pipe(debounceTime(1000)).subscribe(v => {
      this.sValue = v;
    });
    this.subscriptions.push(sub);

    sub = this.subjectService.as$.subscribe(v => {
      this.asValue = v;
    });
    this.subscriptions.push(sub);

    sub = this.subjectService.bs$.subscribe(v => {
      this.bsValue = v;
    });

    this.subscriptions.push(sub);

    sub = this.subjectService.rs$.subscribe(v => {
      if (this.rsValue.length === 3) {
        this.rsValue.splice(0, 1);
      }
      this.rsValue.push(v);
    });
    this.subscriptions.push(sub);

    this.started = true;
  }

  private stop() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.started = false;
  }
}
