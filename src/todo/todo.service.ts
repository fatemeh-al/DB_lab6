import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/category.entity';
import ItemEntity from 'src/db/item.entity';
import TagEntity from 'src/db/tag.entity';
import TaskEntity from 'src/db/task.entity';
import UserEntity from 'src/db/user.entity';
import CreateCategoryDTO from './dto/createCategory.dto';
import CreateItemDto from './dto/createItem.dto';
import CreateTagDto from './dto/createTag.dto';
import CreateTaskDto from './dto/createTask.dto';
import EditTaskDto from './dto/editTask.dto';

@Injectable()
export class TodoService {

    async addCategory(categoryInfo: CreateCategoryDTO): Promise<CategoryEntity>{
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = categoryInfo.name;
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }

    async addTag(tagInfo: CreateTagDto): Promise<TagEntity>{
        const tagEntity: TagEntity = TagEntity.create();
        tagEntity.name = tagInfo.name;
        await TagEntity.save(tagEntity);
        return tagEntity;
    }

    async addItem(itemInfo: CreateItemDto): Promise<ItemEntity>{
        const itemEntity: ItemEntity = ItemEntity.create();
        itemEntity.content = itemInfo.content;
        itemEntity.task = await TaskEntity.findOne(itemInfo.taskID);
        await ItemEntity.save(itemEntity);
        return itemEntity;
    }

    async addTask(taskInfo: CreateTaskDto): Promise<TaskEntity>{
        const taskEntity : TaskEntity = TaskEntity.create();
        taskEntity.user = await UserEntity.findOne(taskInfo.userID);
        taskEntity.category = await CategoryEntity.findOne(taskInfo.categoryID);
        taskEntity.items=[];
        for ( let i = 0; i < taskInfo.itemIDs.length ; i++)
        {
            const item = await ItemEntity.findOne(taskInfo.itemIDs[i]);
            taskEntity.items.push(item);
        }
        taskEntity.tags=[];
        for ( let i = 0; i < taskInfo.tagIDs.length ; i++)
        {
            const tag = await TagEntity.findOne(taskInfo.tagIDs[i]);
            taskEntity.tags.push(tag);
        }
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }

    async editTask(taskDetails: EditTaskDto): Promise<TaskEntity> {
        const taskEntity = await TaskEntity.findOne(taskDetails.taskID);
        taskEntity.user = await UserEntity.findOne(taskDetails.userID);
        taskEntity.category = await CategoryEntity.findOne(taskDetails.categoryID);
        taskEntity.items=[];
        for ( let i = 0; i < taskDetails.itemIDs.length ; i++)
        {
            const item = await ItemEntity.findOne(taskDetails.itemIDs[i]);
            taskEntity.items.push(item);
        }
        taskEntity.tags=[];
        for ( let i = 0; i < taskDetails.tagIDs.length ; i++)
        {
            const tag = await TagEntity.findOne(taskDetails.tagIDs[i]);
            taskEntity.tags.push(tag);
        }
        await taskEntity.save();
        return taskEntity;
    }

    async deleteTask(taskID: number): Promise<TaskEntity> {
        const task = await TaskEntity.findOne(taskID);
        await task.remove();
        return task;
    }
}
