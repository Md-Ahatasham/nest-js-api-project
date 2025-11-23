import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  public async getProfiles() {
    return await this.profileRepository.find();
  }

  public async createProfile(profile: CreateProfileDto) {
    const profileData = this.profileRepository.create({
      ...profile,
      userId: { id: profile.userId },
    });

    return await this.profileRepository.save(profileData);
  }
}
