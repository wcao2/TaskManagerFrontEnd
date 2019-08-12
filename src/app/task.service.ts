import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //ng generate service WebRequest(handle all of the web request logic)
  //inject web-request.service in here
  constructor(private webReqService:WebRequestService) { }

  createList(title:string){
    //send a web request to create a list
    return this.webReqService.post('lists',{title});
  } 

  createTask(title:string,listId:string){
    return this.webReqService.post(`lists/${listId}/tasks`,{title});
  }

  getLists(){
    return this.webReqService.get('lists');
  }
  
  getTasks(listId:string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  //create complete method
   complete(task:Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed:!task.completed//opposite of the current completed value
    });
  }
}
