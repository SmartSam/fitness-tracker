import { Component, OnInit, Injectable } from '@angular/core';
import { Exercise } from '../excercise.model';
import { TrainingService } from '../training.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

@Injectable()
export class NewTrainingComponent implements OnInit {
 exercises: Exercise[] = [];
  constructor(private trainingService: TrainingService) {

   }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }
  startTraining(form: NgForm){
    this.trainingService.startExcercise(form.value.excercise);
  }

}
