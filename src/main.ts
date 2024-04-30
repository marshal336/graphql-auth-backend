import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: process.env.ORIGIN,
  });

  app.use(
    session({
      name: 'nest.sid',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        priority: 'high',
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(process.env.PORT ?? 5500);
}

bootstrap();
