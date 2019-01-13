import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAccountsComponent } from './selected-accounts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('SelectedAccountsComponent', () => {
  let component: SelectedAccountsComponent;
  let fixture: ComponentFixture<SelectedAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAccountsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
