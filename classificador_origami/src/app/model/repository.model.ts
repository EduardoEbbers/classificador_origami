import { Injectable } from "@angular/core";
import { SimpleDataSource } from "./datasource.model";
import { Origami } from "./origami.model";

@Injectable()
export class ModelOrigami {
    //private dataSource: SimpleDataSource;
    private origamis: Origami[];
    private locator = (o: Origami, id: number | any) => o.id == id;

    constructor(private dataSource: SimpleDataSource) {
        //this.dataSource = new SimpleDataSource();
        this.origamis = new Array<Origami>();
        this.dataSource.getData()
            .forEach(o => this.origamis.push(o));
    }

    getOrigamis(): Origami[] {
        return this.origamis;
    }

    getOrigami(id: number): Origami | undefined {
        return this.origamis.find(o => this.locator(o, id));
    }

    saveOrigami(origami: Origami) {
        if(origami.id == 0 || origami.id == null) {
            origami.id = this.generateID();
            this.origamis.push(origami);
        } else {
            let index = this.origamis.findIndex(o => this.locator(o, origami.id));
            this.origamis.splice(index, 1, origami);
        }
    }

    deleteOrigami(id: number) {
        let index = this.origamis.findIndex(o => this.locator(o, id));
        if(index > -1) {
            this.origamis.splice(index,1);
        }
    }

    private generateID(): number {
        let candidate: number = 100;
        while(this.getOrigami(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}