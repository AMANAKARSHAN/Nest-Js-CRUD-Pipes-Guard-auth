import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  public username = 'amansinha';
  public password = 'aman@123';

  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (
      request.header('username') == undefined ||
      request.header('password') == undefined
    )
      return false;

    return (
      request.header('username') == 'amansinha' &&
      request.header('password') == 'aman@123'
    );
  }
}
