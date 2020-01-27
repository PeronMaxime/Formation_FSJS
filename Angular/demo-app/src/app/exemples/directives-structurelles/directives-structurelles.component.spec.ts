import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesStructurellesComponent } from './directives-structurelles.component';

describe('DirectivesStructurellesComponent', () => {
  let component: DirectivesStructurellesComponent;
  let fixture: ComponentFixture<DirectivesStructurellesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesStructurellesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesStructurellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
