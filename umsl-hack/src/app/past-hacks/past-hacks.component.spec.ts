import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastHacksComponent } from './past-hacks.component';

describe('PastHacksComponent', () => {
  let component: PastHacksComponent;
  let fixture: ComponentFixture<PastHacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastHacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastHacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
