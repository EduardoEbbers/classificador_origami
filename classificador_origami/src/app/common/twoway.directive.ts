import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChange, SimpleChanges } from "@angular/core";

@Directive({
    selector: 'input[oriModel]',
    exportAs: 'oriModel'
})
export class OriModel {
    direction: string = 'None';

    @Input('oriModel')
    modelProperty: string | undefined = '';

    @HostBinding('value')
    fieldValue: string = '';

    @Output('oriModelChange')
    update = new EventEmitter<string>();

    @HostListener('input', ['$event.target.value'])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = 'Element -> model';
    }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        let change = changes['modelProperty'];
        if(change.currentValue != this.fieldValue) {
            this.fieldValue = changes['modelProperty'].currentValue || '';
            this.direction = 'Model -> element';
        }
    }
}