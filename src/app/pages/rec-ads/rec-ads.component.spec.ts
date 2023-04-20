import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecAdsComponent } from './rec-ads.component';

describe('RecAdsComponent', () => {
  let component: RecAdsComponent;
  let fixture: ComponentFixture<RecAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
