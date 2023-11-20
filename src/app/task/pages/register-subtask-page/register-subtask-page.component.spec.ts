import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubtaskPageComponent } from './register-subtask-page.component';

describe('RegisterSubtaskPageComponent', () => {
  let component: RegisterSubtaskPageComponent;
  let fixture: ComponentFixture<RegisterSubtaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSubtaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSubtaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
