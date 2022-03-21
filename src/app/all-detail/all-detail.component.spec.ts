import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailComponent } from './all-detail.component';

describe('AllDetailComponent', () => {
  let component: AllDetailComponent;
  let fixture: ComponentFixture<AllDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
