import { Get, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TweetService {
  constructor(private readonly userService: UserService) {}

  tweet: { text: string; date: Date; UserId: number }[] = [
    { text: 'some text1', date: new Date('2024-20-11'), UserId: 1 },
    { text: 'some text1', date: new Date('2024-20-11'), UserId: 1 },
    { text: 'some text3', date: new Date('2024-30-11'), UserId: 2 },
  ];

  @Get()
  public getTweets(userId: number) {
    const userInfo = this.userService.getUserById(userId);
    const tweetInfo = this.tweet.filter((t) => t.UserId === userId);
    return tweetInfo.map((t) => {
      return { text: t.text, date: t.date, name: userInfo?.name };
    });
  }
}
