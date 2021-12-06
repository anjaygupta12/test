import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseRlistComponent } from './use-rlist.component';

describe('UseRlistComponent', () => {
  let component: UseRlistComponent;
  let fixture: ComponentFixture<UseRlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseRlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseRlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
