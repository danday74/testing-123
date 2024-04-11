import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPodComponent } from './basic-pod.component';

describe('BasicPodComponent', () => {
  let component: BasicPodComponent;
  let fixture: ComponentFixture<BasicPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
