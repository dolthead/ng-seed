import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './../../../src/app/about/about.component';

describe('About', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    });
  });

  it ('should work', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
  });
});
