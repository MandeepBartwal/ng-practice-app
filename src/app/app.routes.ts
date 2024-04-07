import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpeseFromComponent } from './pages/expese-from/expese-from.component';

export const routes: Routes = [
  { path: '', component: ExpenseComponent },
  { path: 'expense-form', component: ExpeseFromComponent },
  { path: 'expense-form/:id', component: ExpeseFromComponent },
];
