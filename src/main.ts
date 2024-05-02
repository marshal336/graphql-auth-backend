import session from 'express-session';
import passport from 'passport';
import CookieParser from 'cookie-parser'
import express from 'express'  
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: process.env.ORIGIN,
  });
  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFieldSize: 100000 }),
  )
  app.use('/graphql/uploads', express.static(join(__dirname, '..', 'uploads')))
  app.use(CookieParser())
  app.use(
    session({
      name: process.env.SESSION_NAME,
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
