import { Injectable } from "@angular/core";
import { Origami } from "./origami.model";

@Injectable()
export class SimpleDataSource {
    private data: Origami[];

    constructor() {
        this.data = new Array<Origami>(
            new Origami(1, "Carnotaurus", 10, "Works of Satoshi Kamiya", "1995-2003", "Satoshi Kamiya", false, "origami", "facil", "50x50", "30x30", "1:30h", "lorem ipsum"),
            new Origami(2, "Eagle Ray", 12, "Works of Satoshi Kamiya", "2010", "Satoshi Kamiya", true, "modular", "facil", "30x30", "20x20", "3:30h", "lorem ipsum lorem"),
            new Origami(3, "Splash", 1013, "Kamiya", "2025", "Kamiya", false, "origami", "dificil", "50x50", "40x40", "5:30h", "lorem ipsum lorem ipsum")
        )
    }

    getData(): Origami[] {
        return this.data;
    }
}