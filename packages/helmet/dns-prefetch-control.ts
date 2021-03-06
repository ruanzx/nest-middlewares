import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetDnsPrefetchControlMiddleware implements NestMiddleware {

    public static configure(opts: helmet.IHelmetDnsPrefetchControlConfiguration) {
        this.options = opts;
    }

    private static options: helmet.IHelmetDnsPrefetchControlConfiguration;

    public resolve(...args: any[]): MiddlewareFunction {
        if (HelmetDnsPrefetchControlMiddleware.options) {
            return helmet.dnsPrefetchControl(HelmetDnsPrefetchControlMiddleware.options);
        } else {
            return helmet.dnsPrefetchControl();
        }
    }
}
