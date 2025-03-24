import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsabilityComponent } from './skillsability.component';

describe('SkillsabilityComponent', () => {
  let component: SkillsabilityComponent;
  let fixture: ComponentFixture<SkillsabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
