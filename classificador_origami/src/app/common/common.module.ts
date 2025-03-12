import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { OriDisplayValueDirective, VALUE_SERVICE } from "./valueDisplay.directive";
import { OriAddTaxPipe } from "./addTax.pipe";
import { OriAttrDirective } from "./attr.directive";
import { OriCellColor } from "./cellColor.directive";
import { OriCellColorSwitcher } from "./cellColorSwitcher.directive";
import { OriDificuldadeFilterPipe } from "./dificuldadeFilter.pipe";
import { OriDiscountAmountDirective } from "./discountAmount.directive";
import { OriDiscountPipe } from "./discount.pipe";
import { OriIteratorDirective } from "./iterator.directive";
import { OriStructureDirective } from "./structure.directive";
import { OriModel } from "./twoway.directive";
import { LogService } from "./log.service";
import { DiscountService } from "./discount.service";

@NgModule({
    imports: [ModelModule],
    providers: [
        LogService,
        DiscountService,
        {provide: VALUE_SERVICE, useValue: "Apples"}
    ],
    declarations:[
        OriAddTaxPipe,
        OriAttrDirective,
        OriCellColor,
        OriCellColorSwitcher,
        OriDificuldadeFilterPipe,
        OriDiscountPipe,
        OriDiscountAmountDirective,
        OriIteratorDirective,
        OriStructureDirective,
        OriModel,
        OriDisplayValueDirective
    ],
    exports: [
        OriAddTaxPipe,
        OriAttrDirective,
        OriCellColor,
        OriCellColorSwitcher,
        OriDificuldadeFilterPipe,
        OriDiscountPipe,
        OriDiscountAmountDirective,
        OriIteratorDirective,
        OriStructureDirective,
        OriModel,
        OriDisplayValueDirective
    ]
})
export class CommonModule { }