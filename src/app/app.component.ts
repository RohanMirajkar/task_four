import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputValueValidator } from './shared/Validator/box-value.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm !: FormGroup;
  data :any;
  ngOnInit(){
    this.myForm = new FormGroup({
      boxOne : new FormControl('', [Validators.required , InputValueValidator.maxValue]),
      boxTwo : new FormControl('' ,[Validators.required , InputValueValidator.maxValue])
    })

    
  }

  submit(){
    let valOne = +this.myForm.value.boxOne;
    let valTwo = +this.myForm.value.boxTwo;
    this.data = {
      datasets: [
        {
          data: [valOne, valTwo],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };
  }

  onBlur(event : any){
    if(+event.target.value <= 100){
      if(event.target.id === 'boxOne'){
        this.myForm.patchValue({
          boxTwo : 100 -  +event.target.value,
        })
      }
      if(event.target.id === 'boxTwo'){
        this.myForm.patchValue({
          boxOne : 100 -  +event.target.value,
        })
      }
    }
  }
}
