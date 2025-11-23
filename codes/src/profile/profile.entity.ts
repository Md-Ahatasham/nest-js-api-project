import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  @Index()
  id: number;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profileImage: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  userId: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
