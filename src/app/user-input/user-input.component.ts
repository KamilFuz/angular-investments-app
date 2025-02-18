import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentsResultComponent} from "../investments-result/investments-result.component";
import type {UserInput} from "./user-input.model";
import {CalculateService} from "../services/calcuate.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
    InvestmentsResultComponent
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(3);
  constructor(private calculateService: CalculateService) {
  }
  onCalculate()
  {
    const userInput: UserInput = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn()
    }
    this.calculateService.onCalculateUserInput(userInput);
  }

  onReset() {
    this.initialInvestment = signal(0);
    this.annualInvestment = signal(0);
    this.expectedReturn = signal(0);
    this.duration = signal(3);
    this.calculateService.onCalculateUserInput(undefined);
  }
}


