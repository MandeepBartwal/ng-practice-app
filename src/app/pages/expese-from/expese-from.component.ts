import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpense } from '../../core/models/common.modal';

@Component({
  selector: 'app-expese-from',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expese-from.component.html',
  styleUrl: './expese-from.component.css',
})
export class ExpeseFromComponent implements OnInit{
  expenseForm!: FormGroup;
  expenseId= ''
  constructor(
    private fb: FormBuilder,
    private _expenseService: ExpenseService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.expenseForm = this.fb.group({
      price: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(params)=>{
        this.expenseId = params['id']
        this.getExpense(this.expenseId)
      }
    })
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this._expenseService.addExpense(this.expenseForm.value);
      this._router.navigateByUrl('/');
    } else {
      this.expenseForm.markAllAsTouched();
    }
  }

  getExpense(key: string) {
    console.log(key);
    
    this._expenseService.getExpense(key).snapshotChanges().subscribe({
      next:(data)=>{
        console.log(data);
        
        let expense = data.payload.toJSON() as IExpense;
        this.expenseForm.setValue(expense);
      }
    })
  }
  
}
