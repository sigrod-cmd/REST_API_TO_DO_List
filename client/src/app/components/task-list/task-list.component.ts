import { Component, OnInit } from '@angular/core';
import { tarea } from 'src/app/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  tareas : any  = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.taskService.getTareas().subscribe(
      res => {
        this.tareas = res
      },
      err => console.error(err)  
      
);
  }

  deleteTarea(Id: string){
    this.taskService.deleteTarea(Id).subscribe(
      res => {
        console.log(res); 
        this.getTareas();
      },
      err => console.log(err)
    )
    
 
  }



}
