import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCompComponent } from './feed-comp.component';

describe('FeedCompComponent', () => {
  let component: FeedCompComponent;
  let fixture: ComponentFixture<FeedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
