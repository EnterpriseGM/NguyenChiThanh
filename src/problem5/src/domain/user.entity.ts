import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import {
  IsNotEmpty,
  Min,
  Max,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { DEFAULT_AGE, MIN_AGE, MAX_AGE } from "../ultility/constants";

//business entity
@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsOptional()
  name: string;

  @Column({ default: DEFAULT_AGE })
  @Min(MIN_AGE)
  @Max(MAX_AGE)
  @IsNumber()
  @IsOptional()
  age: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
