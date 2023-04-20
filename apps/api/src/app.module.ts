import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DynamooseModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
