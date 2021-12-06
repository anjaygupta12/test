import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseListsComponent } from './use-lists.component';

describe('UseListsComponent', () => {
  let component: UseListsComponent;
  let fixture: ComponentFixture<UseListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
