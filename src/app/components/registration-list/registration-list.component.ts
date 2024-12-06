import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/module/client';
import { ManagemantService } from 'src/app/services/managemant.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit{

  clientList:Client[]=[];
  data! : Client;
  dialogResult:string = '';
  displayedColumns: string[] =['id','Client First Name','Client Last Name','Email','Gender','BMI','BMI Result','Package','Enquiry Date','Action'];
  dataSource!: MatTableDataSource<Client>;
  constructor(private service:ManagemantService,private router:Router,private dialog: MatDialog){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(){
    this.getUsers();   
  }

  getUsers(){

    this.service.getAll().subscribe((result=>{
      
      this.clientList=result;
      this.dataSource=new MatTableDataSource(this.clientList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    }))

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id:number){
    this.router.navigate(['update',id])
  }

  view(id:number){  
    let tempData : any = {
      cid : id,
    };
    // let dialogRef =this.dialog.open(UserDetailsComponent,{
      
    // });

     this.dialog.open(UserDetailsComponent, {
      data: tempData,
  });
  

    // this.service.getClient(id)
    //     .subscribe((res) => {
    //           console.log('User Data EDIT DIALOG: ' + JSON.stringify(res) );
    //       })
    
    //       dialogRef.afterClosed().subscribe(result => {
    //         console.log(`Dialog closed: ${result}`);
    //         this.dialogResult = result;
    //     })
    // console.log(id)  
  }
  
  delete(id:number){
    this.service.delete(id).subscribe(()=>{
     this.ngOnInit()
    })    
  }

}
