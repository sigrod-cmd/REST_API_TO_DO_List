import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tarea } from '../models/task';




@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API_URI = 'https://restapitodolist-production.up.railway.app/api';
  
  constructor(private http: HttpClient) {}

  getTareas(){
    
    return this.http.get(`${this.API_URI}/tareas`);
  }

  getTarea(id: string){

    return this.http.get(`${this.API_URI}/tareas/${id}`);
  }
  
  deleteTarea(id: string){

return this.http.delete(`${this.API_URI}/tareas/${id}`);
  }

  saveTarea(tarea : tarea){

    return this.http.post(`${this.API_URI}/tareas`, tarea);

  }

  updateTarea(id: string, updateTarea: tarea) {
    return this.http.patch(`${this.API_URI}/tarea/${id}`, updateTarea);
  }

}
