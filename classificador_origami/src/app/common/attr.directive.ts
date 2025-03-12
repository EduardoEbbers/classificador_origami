import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";
import { Origami } from "../model/origami.model";

@Directive({
    selector: "[ori-attr]"
})
export class OriAttrDirective {
    /*
    constructor(element: ElementRef, @Attribute("ori-attr") bgClass: string) {
        element.nativeElement.classList.add(bgClass || "table-success", "fw-bold");
    }
    */

    /*
    constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener('click', () => {
            if(this.origami != null) {
                this.click.emit(this.origami.nome);
            }
        });
    }
    */

    @Input("ori-attr")
    @HostBinding('class')
    bgClass: string | null = '';
    
    @Input('ori-origami')
    origami: Origami = new Origami();

    @Output('ori-nome')
    click = new EventEmitter<string>();

    @HostListener('click')
    triggerCustomEvent() {
        if(this.origami != null) {
            this.click.emit(this.origami.nome);
        }
    }

    /*
    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "table-success", "fw-bold");
    }
    */

    /*
    ngOnChanges(changes: SimpleChanges) {
        let change = changes['bgClass'];
        let classList = this.element.nativeElement.classList;
        if(!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if(!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
    */
}