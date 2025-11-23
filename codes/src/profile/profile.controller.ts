import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  public async getProfiles() {
    return this.profileService.getProfiles();
  }

  @Post()
  public async createProfile(@Body() profile: CreateProfileDto) {
    return await this.profileService.createProfile(profile);
  }
}
