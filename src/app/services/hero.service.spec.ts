import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService, HeroService]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
