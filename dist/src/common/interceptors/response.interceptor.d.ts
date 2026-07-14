import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface ApiResponse<T> {
    data: T;
    statusCode: number;
    timestamp: string;
}
export declare class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponse<T>>;
}
