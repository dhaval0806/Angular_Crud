import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataModel } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class JsonSvcService {

  constructor(private http:HttpClient) { }

  // add employee
  addEmp(data:dataModel){
    return this.http.post<dataModel>("http://localhost:3000/posts",data)
  }

  // get data
  listEmp(){
    return this.http.get<dataModel>("http://localhost:3000/posts");
  }

  deleteEmp(id:number){
    return this.http.delete<dataModel>("http://localhost:3000/posts/"+id);
  }

  fetchData(id:number){
    return this.http.get<dataModel>("http://localhost:3000/posts/"+id);
  }

  updateData(data:dataModel,id:number){
    return this.http.put<dataModel>("http://localhost:3000/posts/"+id,data);
  }
}


