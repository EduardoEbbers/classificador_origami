import { Inject, Injectable } from "@angular/core";
import { LOG_SERVICE, LogLevel, LogService } from "./log.service";

@Injectable()
export class DiscountService {
    private discountValue: number = 10;
    /*
    private logger?: LogService;

    constructor(@Inject(LOG_SERVICE) private loggers: LogService[]) {
        this.logger = loggers.find(l => l.minimumLevel == LogLevel.DEBUG);
    }
    */

    constructor(private logger: LogService) {       
    }

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        this.discountValue = newValue;
    }

    public applyDiscount(price: number) {
        this.logger?.logInfoMessage(`Discount ${this.discount}`     + ` applied to price: ${price}`);
        return Math.max(price - this.discountValue, 5);
    }
}