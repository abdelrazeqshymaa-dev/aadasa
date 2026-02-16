import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whous } from './whous';

describe('Whous', () => {
  let component: Whous;
  let fixture: ComponentFixture<Whous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
