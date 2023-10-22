import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;
  let mockMessageservice: MessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageservice = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageservice}
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
  });

  it('should call get with the correct URL', () => {
    service.getHero(4).subscribe();
    service.getHero(3).subscribe();

    const req = httpTestingController.expectOne('api/heroes/4');
    req.flush({id: 4, name: 'SOME NAME', strength: 3});
    httpTestingController.verify();
  })
});

