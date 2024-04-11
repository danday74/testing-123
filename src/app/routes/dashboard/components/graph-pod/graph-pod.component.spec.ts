import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPodComponent } from './graph-pod.component';

describe('GraphPodComponent', () => {
  let component: GraphPodComponent;
  let fixture: ComponentFixture<GraphPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
