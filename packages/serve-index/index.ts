import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as serveIndex from 'serve-index';

@Injectable()
export class ServeIndexMiddleware implements NestMiddleware {

    public static configure(path: string, opts?: serveIndex.Options) {
        this.path = path;
        this.options = opts;
    }

    private static options: serveIndex.Options;
    private static path: string;

    public resolve(...args: any[]): MiddlewareFunction {
        if (ServeIndexMiddleware.options) {
            return serveIndex(ServeIndexMiddleware.path, ServeIndexMiddleware.options);
        } else {
            throw new Error('ServeIndexMiddleware requires a path in configure.');
        }
    }
}
