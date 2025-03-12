import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[oriIf]'
})
export class OriStructureDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

    @Input('oriIf')
    expressionResult: boolean | undefined;

    ngOnChanges(changes: SimpleChanges) {
        let change = changes['expressionResult'];
        if(!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if(change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }

    }
}