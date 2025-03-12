import { Component } from "@angular/core";
import { ModelOrigami } from "../model/repository.model";
import { Origami } from "../model/origami.model";
import { LogService } from "../common/log.service";
import { DiscountService } from '../common/discount.service';

@Component({
    selector: 'oriOrigamiTable',
    templateUrl: './origamiTable.component.html',
    providers: [LogService]
})
export class OrigamiTableComponent {
    taxRate: number = 0;
    dificuldadeFilter: string | undefined;
    itemCount: number = 3;

    constructor(private modelOrigami: ModelOrigami) { }

    getOrigami(id: number): Origami | undefined {
        return this.modelOrigami?.getOrigami(id);
    }

    getOrigamis(): Origami[] | undefined {
        return this.modelOrigami?.getOrigamis();
    }

    deleteOrigami(id: number) {
        this.modelOrigami?.deleteOrigami(id);
    }
}