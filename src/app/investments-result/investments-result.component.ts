import {Component, computed} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {CalculateService} from "../services/calcuate.service";
import {InvestmentsResultModel} from "./investments-result.model";

@Component({
  selector: 'app-investments-result',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investments-result.component.html',
  styleUrl: './investments-result.component.css'
})
export class InvestmentsResultComponent {
  constructor(private calculateService: CalculateService) {
  }
  investmentsResult= computed(() => this.calculateService.resultsData());
}
