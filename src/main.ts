import { NestFactory } from "@nestjs/core";
import { NextFunction, Request, Response } from "express";
import { AppModule } from "./app.module";

//to create global MiddleWare we have to use function based method
//to create module specific Middleware we can use class base method that implement NestMiddleWare
function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log("This is global middleWare 1");

  //transfer all the control to next middleware i.e to globalMiddleWareTwo
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log("This is global middleWare 2");
  //transfer all the control to next middleware
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  // app.useGlobalGuards(new BookGuard());
  await app.listen(3000);
}
bootstrap();
