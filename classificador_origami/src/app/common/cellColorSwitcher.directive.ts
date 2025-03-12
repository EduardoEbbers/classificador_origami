import { ContentChildren, Directive, Input, QueryList, SimpleChanges } from "@angular/core";
import { OriCellColor } from "./cellColor.directive";

@Directive({
    selector: 'table'
})
export class OriCellColorSwitcher {
    @Input('oriCellDarkColor')
    modelProperty: Boolean | undefined;

    /*
    @ContentChild(OriCellColor)
    contentChild: OriCellColor | undefined;
    
    ngOnChanges(changes: SimpleChanges) {
        if(this.contentChild != null) {
            this.contentChild.setColor(changes['modelProperty'].currentValue);
        }
    }
    */

    @ContentChildren(OriCellColor, {descendants: true})
    contentChildren: QueryList<OriCellColor> | undefined;

    ngOnChanges(changes: SimpleChanges) {
        this.updateContentChildren(changes['modelProperty'].currentValue);
    }

    ngAfterContentInit() {
        if(this.modelProperty != undefined) {
            this.contentChildren?.changes.subscribe(() => {
                this.updateContentChildren(this.modelProperty as Boolean);
            })
        }
    }

    private updateContentChildren(dark: Boolean) {
        if(this.contentChildren != null && dark != undefined) [
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark : !dark)
            })
        ]
    }
}