import { NgModule } from "@angular/core";
import { ModelOrigami } from "./repository.model";
import { SimpleDataSource } from "./datasource.model";

@NgModule({
    providers: [
        ModelOrigami,
        SimpleDataSource
    ]
})
export class ModelModule { }