import { hash } from "bcrypt";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 200 })
  name: string;
  @Column({ name: "last_name", type: "varchar", length: 200 })
  lastName: string;
  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  email: string;
  @Column({ type: "varchar", length: 120, nullable: false, select: false })
  password: string;
  @Column({type:"simple-array"})
  roles: string[];
  @Column({ type: "bool", default: true })
  status: boolean;
  @CreateDateColumn({ name: "create_at", type: "timestamp" })
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
