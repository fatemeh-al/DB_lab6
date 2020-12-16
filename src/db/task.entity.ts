import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import CategoryEntity from './category.entity';
import TagEntity from './tag.entity';
import ItemEntity from './item.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => UserEntity, user => user.tasks)
  user: UserEntity;

  @ManyToOne(type => CategoryEntity, category => category.tasks)
  category: CategoryEntity;

  @ManyToMany( type => TagEntity )
  @JoinTable()
  tags: TagEntity[];

  @OneToMany( type => ItemEntity , item => item.task )
  items: ItemEntity[];

}