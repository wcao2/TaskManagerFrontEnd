import { Component, OnInit } from '@angular/core';
import {TaskService} from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists:List[];
  tasks:Task[];

  constructor(private taskService: TaskService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        //show what inside them
        console.log(params);
        //According to the routing module, need to use listId here
        this.taskService.getTasks(params.listId).subscribe((tasks:Task[])=>{
          this.tasks=tasks;
        })
      }
    )

    this.taskService.getLists().subscribe((lists:List[])=>{
      //console.log(lists);
      //use the lists above to show in our lists pane
      this.lists=lists;
    })
  }

  onTaskClick(task: Task){
    //set the task to be completed
    this.taskService.complete(task).subscribe(()=>{
       console.log("Completed successfully"); 
       //the task has been set to be completed successfully
       task.completed=!task.completed;
    })
  }

}
