import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { JsonSvcService } from '../json-svc.service';
import { dataModel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  employeeForm! :FormGroup;
  data:any;
  constructor(
    private formBuilder:FormBuilder,
    private apiSvc:JsonSvcService
  ){}

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  private initForm(){
    this.employeeForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      pinCode:['',Validators.required],
      phoneNumber:['',Validators.required],
    })
  }

  onAddNew(data:any){
    console.log('New Added',data);
    this.apiSvc.addEmp(data).subscribe((res=>{
      this.employeeForm.reset();
      this.loadData();
    }));
  }

  loadData(){
    this.apiSvc.listEmp().subscribe(res=>{
      this.data=res;
    })
  }

  deleteClick(id:any){
    this.apiSvc.deleteEmp(id).subscribe((res)=>{
      console.log("Deleted");
      this.loadData();
    })
  }
}
