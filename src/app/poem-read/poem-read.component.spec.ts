import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemReadComponent } from './poem-read.component';

describe('PoemReadComponent', () => {
  let component: PoemReadComponent;
  let fixture: ComponentFixture<PoemReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
