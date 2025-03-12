import { Component, Inject, SkipSelf } from "@angular/core";
import { Origami } from "../model/origami.model";
import { ModelOrigami } from "../model/repository.model";
import { VALUE_SERVICE } from "../common/valueDisplay.directive";

@Component({
    selector: 'ori-origamiform',
    templateUrl: './origamiForm.component.html',
    viewProviders: [{provide: VALUE_SERVICE, useValue: 'Oranges'}],

})
export class OrigamiFormComponent {
    newOrigami: Origami = new Origami();

    constructor(private modelOrigami: ModelOrigami,
        @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string) { 
            console.log("service Value: " + serviceValue);
        }

    submitForm(form: any) {
        this.modelOrigami.saveOrigami(this.newOrigami);
        this.newOrigami = new Origami();
        form.resetForm();
    }
}