import { Component } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
    selector: 'oriDiscountDisplay',
    templateUrl: './discountDisplay.component.html'
})
export class OriDiscountDisplayComponent {
    constructor(public discounter: DiscountService) { }
}