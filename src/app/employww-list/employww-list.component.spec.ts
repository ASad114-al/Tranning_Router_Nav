import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploywwListComponent } from './employww-list.component';

describe('EmploywwListComponent', () => {
  let component: EmploywwListComponent;
  let fixture: ComponentFixture<EmploywwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploywwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploywwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
