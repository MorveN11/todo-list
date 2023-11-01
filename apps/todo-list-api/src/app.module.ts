import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../todo-list-client/dist/todo-list-client'),
    }),
  ],
})
class AppModule {}

export default AppModule;
