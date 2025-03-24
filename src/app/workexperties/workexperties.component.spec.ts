import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexpertiesComponent } from './workexperties.component';

describe('WorkexpertiesComponent', () => {
  let component: WorkexpertiesComponent;
  let fixture: ComponentFixture<WorkexpertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkexpertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkexpertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
