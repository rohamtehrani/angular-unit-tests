import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from 'src/app/services/hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
