import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule],
})
export class TweetModule {}
