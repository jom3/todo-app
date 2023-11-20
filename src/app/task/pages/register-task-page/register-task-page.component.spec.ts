import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaskPageComponent } from './register-task-page.component';

describe('RegisterTaskPageComponent', () => {
  let component: RegisterTaskPageComponent;
  let fixture: ComponentFixture<RegisterTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
