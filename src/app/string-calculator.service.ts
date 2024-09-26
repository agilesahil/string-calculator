import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number {
    if (!numbers) return 0;

    // Handle custom delimiters
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }

    // Split the string and convert to numbers
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    // Check for negative numbers
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    // Sum up the numbers
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
