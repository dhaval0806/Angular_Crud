import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { JsonSvcService } from '../json-svc.service';
import { dataModel } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  dataId!:any;  
  employee!:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private apiSvc:JsonSvcService
  ){

  }
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.dataId=param['get']("id");
      console.log('ID',this.dataId);
    })
    this.apiSvc.fetchData(this.dataId).subscribe((data:dataModel)=>{
      this.employee=data;
    })
  }

  updateClick(){
    this.apiSvc.updateData(this.employee,this.dataId).subscribe((res:dataModel)=>{
      this.router.navigate(["/"]);
    })
  }
}
