import { Hero } from 'src/app/models/hero';
import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES: Hero[] = [];
  let mockHeroService: any;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'WonderFull', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55},
    ];

    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero'
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  it('delete hero', () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    component.delete(HEROES[0]);

    expect(component.heroes.length).toBe(2);
  });
});
