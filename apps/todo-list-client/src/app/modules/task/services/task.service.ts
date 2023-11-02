import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { API_URL } from '@/utils/constants';

import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/task.entity';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = `${API_URL}/tasks`;

  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.http.get<Task[]>(this.url).subscribe((tasks) => {
      this.tasksSubject.next(tasks);
    });
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  createTask(task: CreateTaskDto): void {
    this.http.post<Task>(this.url, task).subscribe((tsk) => {
      this.tasksSubject.next([...this.tasksSubject.getValue(), tsk]);
    });
  }

  updateTask(id: string, task: UpdateTaskDto): Observable<Task> {
    return this.http.patch<Task>(`${this.url}/${id}`, task);
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/${id}`);
  }
}
