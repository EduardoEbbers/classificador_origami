import { BrowserModule } from "@angular/platform-browser";
import { OrigamiComponent } from "./component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "./model/model.module";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ComponentsModule } from "./components/components.module";
import { OrigamiFormComponent } from "./components/origamiForm.component";
import { OrigamiTableComponent } from "./components/origamiTable.component";
import { NgModule } from "@angular/core";
//import { localeFr } from '@angular/common/locales/fr';

//registerLocaleData(localeFr);

@NgModule({
  declarations: [
    OrigamiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  bootstrap: [
    OrigamiFormComponent,
    OrigamiTableComponent
  ]
})
export class AppModule { }
