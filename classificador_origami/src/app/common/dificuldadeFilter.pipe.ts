import { Pipe } from "@angular/core";
import { Origami } from "../model/origami.model";

@Pipe({
    name: 'filter',
    pure: false
})
export class OriDificuldadeFilterPipe {
    transform(origamis: Origami[] | undefined, dificuldade: string | undefined): Origami[] {
        if(origamis == undefined) {
            return [];
        }
        return dificuldade == undefined ? origamis : origamis.filter(o => o.dificuldade == dificuldade);
    }
}