import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExpenseService } from '../../core/services/expense.service';
import { IExpense } from '../../core/models/common.modal';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
})
export class ExpenseComponent implements OnInit {
  expenses: IExpense[] = [];
  totalExpenses = 0;
  constructor(
    private _expenseService: ExpenseService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAllExpenses();
  }
  getAllExpenses() {
    this._expenseService
      .getAllExpenses()
      .snapshotChanges()
      .subscribe({
        next: (data) => {
          this.expenses = [];
          data.forEach((item) => {
            let expense = item.payload.toJSON() as IExpense;
            this.totalExpenses += parseInt(expense.price);
            this.expenses.push({
              key: item.key || '',
              title: expense.title,
              price: expense.price,
              description: expense.description,
            });
          });
        },
      });
  }

  editExpense(key: string) {
    this._router.navigateByUrl('/expense-form/' + key);
  }
}
