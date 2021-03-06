import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {Exercise} from '../excercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date','name','duration','calories','state'];
  dataSource =new MatTableDataSource<Exercise>();  
  @ViewChild(MatSort) sort: MatSort;
  constructor(private trainingService: TrainingService) { }

  ngOnInit(){
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  filterData(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
