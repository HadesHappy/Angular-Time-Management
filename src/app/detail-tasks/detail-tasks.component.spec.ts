import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTasksComponent } from './detail-tasks.component';

describe('DetailTasksComponent', () => {
  let component: DetailTasksComponent;
  let fixture: ComponentFixture<DetailTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
