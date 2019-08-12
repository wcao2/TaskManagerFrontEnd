import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/lists',pathMatch:'full'},
  
  //add a route for the new list page
  {path:'new-list',component:NewListComponent},
  // {path:'new-task',component:NewTaskComponent}
  {path:'lists/:listId/new-task',component:NewTaskComponent},
  // access this listId in the task view component
  //it is very useful cos it allows us to get the value of the listId
  {path:'lists/:listId',component:TaskViewComponent},
  {path:'lists',component:TaskViewComponent},
  {path:'login',component:LoginPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
