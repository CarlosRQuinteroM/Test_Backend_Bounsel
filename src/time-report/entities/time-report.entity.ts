
import { User } from "src/users/entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";

@Entity('time_reports')

export class TimeReport {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:'start_date', type:'timestamp'})
    start_date:Date;
    @Column({name:'end_date', type:'timestamp'})
    end_date:Date;
    @Column({name:'total_time', type:'timestamp'})
    total_time:TimeReport;
    @CreateDateColumn({name:'create_at',type:'timestamp'})
    createdAt:Date;
    @ManyToOne(type=> User , user=>user.timeReport )
    @JoinColumn({name: "user_id" })
    user:User;


}
