import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import TasksModule from './tasks/tasks.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../todo-list-client/dist/todo-list-client'),
    }),
    TasksModule,
  ],
})
class AppModule {}

export default AppModule;
