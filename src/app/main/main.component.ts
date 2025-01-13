import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  Id = 1;
  review_count = 0;
  doing_count = 0;
  done_count = 0;

  message: any = true;
  message_2: any = false;


  lists: Lists[] = []; 
  list2: any[] = []; 
  list3: any[] = []; 
  list4: any[] = []; 

  Task: any;

  remove(index: any, stage: any)
  {
    if(stage=='Backlog')
    {
      this.list2.push(this.lists.at(index));
      this.list2.at(this.list2.length-1).stage = "Doing";
      this.lists.splice(index,1);
    }else if(stage=='Doing')
    {
      this.list3.push(this.list2.at(index));
      this.list3.at(this.list3.length-1).stage = "Review";
      this.list2.splice(index,1);
      this.doing_count++;
    }
    else if(stage=='Review')
    {
      ++this.review_count;
      this.list4.push(this.list3.at(index));
      this.list4.at(this.list4.length-1).stage = "Done";
      this.list3.splice(index,1);
    }
    else if(stage=='Done')
    {
        ++this.done_count;
        alert("Task completed")
        this.list4.splice(index,1);
    }
  }

  add()
  {
    this.message = true;
    this.message_2 = false;
  }

  submit()
  {
    this.message = false;
    this.message_2 = true;
    
      this.lists.push({id:this.Id, Task:this.Task, Status:'Active',stage:'Backlog'});
      this.Id++;
      this.Task = undefined;
      
  }

}

class Lists
{
    Task: any;
    Status: any;
    id: any;
    stage: any;

    constructor(id:any, Task: any, status: any, stage: any)
    {
      this.id = id;
      this.Task = Task;
      this.Status = status;
      this.stage = stage;
    }
}