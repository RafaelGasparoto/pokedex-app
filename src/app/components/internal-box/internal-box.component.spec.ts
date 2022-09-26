import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalBoxComponent } from './internal-box.component';

describe('InternalBoxComponent', () => {
  let component: InternalBoxComponent;
  let fixture: ComponentFixture<InternalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
