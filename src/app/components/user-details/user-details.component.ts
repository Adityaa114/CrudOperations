import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/module/client';
import { ManagemantService } from 'src/app/services/managemant.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userId!: number;
  datab! : any;
  userDetails: Client = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    weight: 0,
    height: 0,
    bmi: 0,
    bmiResult: '',
    gender: '',
    requireSpecialist: '',
    bloodGrp: '',
    diseasesList: '',
    haveGymBefore: '',
    regularPatient: ''
  };
  dialogResult: any;
  constructor(private activatedRoute: ActivatedRoute,private service:ManagemantService, private api: ManagemantService, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UserDetailsComponent>) {



   }

  ngOnInit() {
  
    
    this.service.getClient(this.data.cid)
        .subscribe((res) => {
             
              return this.userDetails = res;
          })
    
       

    
  }



}
