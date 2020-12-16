import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import UserEntity from './db/user.entity';
import CategoryEntity from './db/category.entity';
import ItemEntity from './db/item.entity';
import TagEntity from './db/tag.entity';
import TaskEntity from './db/task.entity';

@Module({
  imports: [HelloModule,
            UserModule,
            TypeOrmModule.forFeature([UserEntity, TagEntity, TaskEntity, ItemEntity, CategoryEntity],),
            TypeOrmModule.forRoot(),
            AuthModule,
            TodoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
