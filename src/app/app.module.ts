import { AppComponent } from "./app.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home/home.component";
import { SortQuestionComponent } from "./sort-question/sort-question.component";
import { AppRoutingModule } from "./app-routing.module";
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      SortQuestionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }