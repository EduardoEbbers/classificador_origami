import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'td[oriApplyColor]'
})
export class OriCellColor {
    @HostBinding('class')
    bgClass: string = '';

    setColor(dark: Boolean) {
        this.bgClass = dark ? 'table-dark' : '';
    }
}