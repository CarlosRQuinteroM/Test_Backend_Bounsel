import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 10, nullable: false, unique: false })
  nombre: string;

  @Column({ type: "varchar", length: 25, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 25, nullable: false })
  password: string;

  @Column({ type: "varchar", length: 10, nullable: false, default:'Custumer' })
  role:string;

  @Column({ type: "varchar", length: 25, nullable: false, default:true})
  isActive: boolean;
  
}
