import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { Expense } from '../../models/Expense';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  newExpense: Expense = new Expense();

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expensesService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  switchToEditMode(expense: Expense) {
    const expenseToEdit = this.expenses.find(e => e._id === expense._id)
    expenseToEdit.editMode = !expenseToEdit.editMode;
  }

  createExpense() {
    const expense = new Expense();
    expense.name = this.newExpense.name;
    expense.cost = this.newExpense.cost;
    expense.date = this.newExpense.date;
    this.expensesService.createExpense(expense)
      .do(expense => this.newExpense = new Expense())
      .subscribe(expense => this.expenses.push(expense));
  }

  updateExpense(expense: Expense) {
    const index = this.expenses.indexOf(expense);
    expense.cost = +expense.cost;
    this.expensesService.updateExpense(expense)
      .subscribe(expense => this.expenses.splice(index, 1, expense));
  }

  deleteExpense(expense: Expense) {
    this.expensesService.deleteExpense(expense)
      .subscribe(expense => this.expenses = this.expenses.filter(e => e._id !== expense._id))
  }

}
