import {Component, signal} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentsResultComponent} from "./investments-result/investments-result.component";
import type {UserInput} from "./user-input/user-input.model";
import type {InvestmentsResultModel} from "./investments-result/investments-result.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentsResultComponent
  ]
})
export class AppComponent {
  // resultsData = signal<InvestmentsResultModel[] | undefined>(undefined);
  //
  // onCalculateUserInput(userInput: UserInput | undefined) {
  //   if (userInput) {
  //     const annualData = Array<InvestmentsResultModel>();
  //     let investmentValue = userInput.initialInvestment;
  //
  //     for (let i = 0; i < userInput.duration; i++) {
  //       const year = i + 1;
  //       const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
  //       investmentValue += interestEarnedInYear + userInput.annualInvestment;
  //       const totalInterest =
  //         investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
  //       annualData.push({
  //         year: year,
  //         interest: interestEarnedInYear,
  //         valueEndOfYear: investmentValue,
  //         annualInvestment: userInput.annualInvestment,
  //         totalInterest: totalInterest,
  //         totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
  //       });
  //     }
  //     this.resultsData.set(annualData);
  //   }
  //   else {
  //     this.resultsData.set(undefined);
  //   }
  // }
}
