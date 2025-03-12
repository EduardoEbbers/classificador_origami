import { ChangeDetectorRef, Directive, Input, IterableChangeRecord, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, ViewRef } from "@angular/core";

@Directive({
    selector: '[oriForOf]'
})
export class OriIteratorDirective {
    private differ: IterableDiffer<any> | undefined;
    private views: Map<any, OriIteratorContext> = new Map<any, OriIteratorContext>();

    constructor(
        private container: ViewContainerRef, 
        private template: TemplateRef<Object>,
        private differs: IterableDiffers ,
        private changeDetector: ChangeDetectorRef   
    ) {}

    @Input('oriForOf')
    dataSource: any;

    /*
    ngOnInit() {
        this.container.clear();
        for(let i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(this.template, new OriIteratorContext(this.dataSource[i], i, this.dataSource.length));
        }
    }
    */

    ngOnInit() {
        //console.log('ngOnInit Called');
        //this.updateContent();
        
        this.differ = <IterableDiffer<any>>this.differs.find(this.dataSource).create();
    }

    ngDoCheck() {
        //console.log('ngDocheck Called');
        //this.updateContent();
        
        let changes = this.differ?.diff(this.dataSource);
        if(changes != null) {
            //console.log('ngDoCheck Called, changes detected');
            
            let arr: IterableChangeRecord<any>[] = [];
            changes.forEachAddedItem(addition => arr.push(addition));

            arr.forEach(addition => {
                if(addition.currentIndex != null) {
                    //this.container.createEmbeddedView(this.template, new OriIteratorContext(addition.item, addition.currentIndex, arr.length));
                    
                    let context = new OriIteratorContext(addition.item, addition.currentIndex, arr.length);
                    context.view = this.container.createEmbeddedView(this.template, context);
                    this.views.set(addition.trackById, context);
                }
            });

            let removals = false;
            changes.forEachRemovedItem(removal => {
                removals = true;
                let context = this.views.get(removal.trackById);
                if(context != null && context.view != null) {
                    this.container.remove(this.container.indexOf(context.view));
                    this.views.delete(removal.trackById);
                }
            });
            if(removals) {
                let index = 0;
                this.views.forEach(context => context.setData(index++, this.views.size));
            }
        }
    }

    /*
    private updateContent() {
        this.container.clear();
        for(let i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(this.template, new OriIteratorContext(this.dataSource[i], i, this.dataSource.length));
        }
    }
    */
}

class OriIteratorContext {
    index: number = 0;
    odd: boolean = false; even: boolean = false;
    first: boolean = false; last: boolean = false;
    view: ViewRef | undefined;

    constructor(public $implicit: any, public position: number, total: number) {
        /*
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
        /*
        /*
        setInterval(() => {
            this.odd = !this.odd;
            this.even = !this.even;
            this.$implicit.pagina++;
        }, 2000);
        */

        this.setData(position, total);
    }

    setData(index: number, total: number) {
        this.index = index;
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    }
}