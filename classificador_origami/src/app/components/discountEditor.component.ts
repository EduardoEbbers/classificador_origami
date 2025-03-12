import { Component } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
    selector: 'oriDiscountEditor',
    templateUrl: './discountEditor.component.html'
})
export class OriDiscountEditorComponent {
    constructor(public discounter: DiscountService) { }
}