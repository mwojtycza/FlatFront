import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Expense } from '../models/Expense';

const apiUrl: string = `http://localhost:8000/api/expenses`;

@Injectable()
export class ExpensesService {

  constructor(private dataService: DataService) { }

  getExpenses(): Observable<Expense[]> {
    return this.dataService.get(apiUrl);
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.dataService.post(apiUrl, expense);
  }

  updateExpense(expense: Expense): Observable<Expense> {
    const url = `${apiUrl}/${expense._id}`;
    return this.dataService.put(url, expense);
  }

  deleteExpense(expense: Expense): Observable<Expense> {
    const url = `${apiUrl}/${expense._id}`;
    return this.dataService.delete(url)
  }
}
