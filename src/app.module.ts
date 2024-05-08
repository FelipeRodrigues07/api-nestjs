import { Module } from '@nestjs/common';
import { AuthenticateController } from './controllers/authenticate.controller'

import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from 'src/env'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';

@Module({ //raiz do projeto
  imports: [
    ConfigModule.forRoot({  //configura para a validação do env
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule, 
  ],
  controllers: [CreateAccountController,  AuthenticateController],
  providers: [ PrismaService],
})
export class AppModule {}
