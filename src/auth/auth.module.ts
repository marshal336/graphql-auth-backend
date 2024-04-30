import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportSessionStrategy } from './strategies/passport.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthResolver, AuthService, LocalStrategy, PassportSessionStrategy],
})
export class AuthModule { }
