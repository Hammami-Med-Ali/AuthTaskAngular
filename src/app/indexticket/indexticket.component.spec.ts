import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexticketComponent } from './indexticket.component';

describe('IndexticketComponent', () => {
  let component: IndexticketComponent;
  let fixture: ComponentFixture<IndexticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
