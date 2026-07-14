import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health() {
    return {
      status: 'ok',
      environment: process.env.NODE_ENV ?? 'development',
      uptime: Math.floor(process.uptime()),
    };
  }
}
