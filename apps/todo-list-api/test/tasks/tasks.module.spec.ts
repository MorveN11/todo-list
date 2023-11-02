import { Test, TestingModule } from '@nestjs/testing';

import TasksModule from '@/tasks/tasks.module';

describe('TasksModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [TasksModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
