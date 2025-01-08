import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortQuestionComponent } from './sort-question.component';

describe('SortQuestionComponent', () => {
  let component: SortQuestionComponent;
  let fixture: ComponentFixture<SortQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
