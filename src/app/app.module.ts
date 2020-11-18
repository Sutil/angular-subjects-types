import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ObserverComponent } from "./observer/observer.component";
import { SubjectComponent } from "./subject/subject.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ObserverComponent, SubjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
