import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalikiComponent } from './waliki.component';

describe('WalikiComponent', () => {
  let component: WalikiComponent;
  let fixture: ComponentFixture<WalikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
