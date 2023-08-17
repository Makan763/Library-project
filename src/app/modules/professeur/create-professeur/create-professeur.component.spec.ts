import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfesseurComponent } from './create-professeur.component';

describe('CreateProfesseurComponent', () => {
  let component: CreateProfesseurComponent;
  let fixture: ComponentFixture<CreateProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
