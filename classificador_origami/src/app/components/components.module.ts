import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { OriDiscountDisplayComponent } from "./discountDisplay.component";
import { OriDiscountEditorComponent } from "./discountEditor.component";
import { OrigamiFormComponent } from "./origamiForm.component";
import { OrigamiTableComponent } from "./origamiTable.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations:[
        OriDiscountDisplayComponent, 
        OriDiscountEditorComponent,
        OrigamiFormComponent,
        OrigamiTableComponent
    ],
    exports:[
        OrigamiFormComponent,
        OrigamiTableComponent
    ]
})
export class ComponentsModule { }