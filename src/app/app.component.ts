import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { task } from './_services/task';
import { taskService } from './_services/task.service';
import {AppSettingsService } from './_services/AppSettingsService';
import { response } from './_services/response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users =[];
  dataSource: task[];
  tasks:task[];
  responseobj= response;
  taskResponse:task;
  displayedColumns: string[] = ['type', 'value', 'vname'];

  balance:string;
  finalbalance:number;
  address :string;  
  TxnHashes:[];
  constructor(private taskService: taskService, private appSettingsService:AppSettingsService) { }
  ngOnInit() {
    this.taskService.getAll().subscribe(data => {
      this.tasks = data; 
      console.log("data   :",this.tasks);
  });
  
  
  this.taskService.getGetBalanceByAddress().subscribe(response => {
     console.log(response) ;
     this.balance= response.balance;
     this.finalbalance =parseInt(this.balance)*0.000000000001;
});

this.taskService.GetRecentTransactions().subscribe(response => {
  console.log(response) ;
  this.TxnHashes= response.TxnHashes;
});

}

  search() {
    this.taskService.getGetBalanceByAddress().subscribe(response => {
      console.log(response) ;
      this.balance= response.balance;
      this.finalbalance =parseInt(this.balance)*9.000000000001;
      if (this.address =='0xA9eB343dF14f0B3F9528E96E298451f09b70A7A5')
      {
        this.finalbalance =parseInt(this.balance)*9.000000000001;
      }else
      {
        this.finalbalance =parseInt(this.balance)*2.000000000001;
      }

 });

    }
  

}
