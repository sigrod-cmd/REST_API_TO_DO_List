import { Component, OnInit } from '@angular/core';
import { tarea } from 'src/app/models/task';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tarea: tarea = {
    id: 0,
    Descripcion: '',
    Estado: '',
    Contenido: '',
  };

  constructor(private taskService: TaskService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

  }

  saveNewTask(){
    delete this.tarea.id;
    this.taskService.saveTarea(this.tarea).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tareas']);
      },
      err => console.error(err)
      
    );
    
  }

  
  
    
   
  
    

  }



  


