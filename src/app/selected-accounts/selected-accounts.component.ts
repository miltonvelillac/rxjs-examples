import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-accounts',
  templateUrl: './selected-accounts.component.html',
  styleUrls: ['./selected-accounts.component.css']
})
export class SelectedAccountsComponent implements OnInit, OnDestroy {

  form: FormGroup;
  accounts = [
    { id: 100, name: 'account 1', check: true },
    { id: 200, name: 'account 2', check: false },
    { id: 300, name: 'account 3', check: true },
    { id: 400, name: 'account 4', check: false }
  ];

  subscripcions = new Subscription();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.listenCheckBox();
  }

  ngOnDestroy() {
    this.subscripcions.unsubscribe();
  }

  createForm() {
    const controls = this.accounts.map(account => new FormControl(account.check));
    this.form = this.formBuilder.group({
      accounts: new FormArray(controls)
    });
  }

  listenCheckBox() {
    this.subscripcions = this.form.get('accounts').valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        map((checkAccount: any[]) =>
          checkAccount.map((v, i) => {
            return {
              ...this.accounts[i],
              check: v
            };
          })
        )
      )
      .subscribe(
        val => console.log(val)
      );
  }

}
