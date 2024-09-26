import { Component } from '@angular/core';
import { StringCalculatorService } from '../string-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  calculate(): void {
    try {
      this.result = this.stringCalculatorService.add(this.input);
      this.errorMessage = null;
    } catch (error: any) {
      this.result = null;
      this.errorMessage = error.message;
    }
  }
}
