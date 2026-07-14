import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  timestamp: string;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponse<T>> {
    const statusCode = _context.switchToHttp().getResponse<{ statusCode: number }>().statusCode;

    return next.handle().pipe(
      map((data) => ({
        data,
        statusCode,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
