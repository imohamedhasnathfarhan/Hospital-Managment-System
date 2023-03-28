import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeditComponent } from './profileedit.component';

describe('ProfileeditComponent', () => {
  let component: ProfileeditComponent;
  let fixture: ComponentFixture<ProfileeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
