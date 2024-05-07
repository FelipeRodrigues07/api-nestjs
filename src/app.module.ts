import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from 'src/env'
import { ConfigModule } from '@nestjs/config'

@Module({ //raiz do projeto
  imports: [
    ConfigModule.forRoot({  //configura para a validação do env
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [CreateAccountController],
  providers: [ PrismaService],
})
export class AppModule {}
