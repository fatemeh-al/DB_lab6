import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column({ length: 500 })
    password: string;

    @OneToMany( type => TaskEntity , task => task.user )
    tasks: TaskEntity[];

}