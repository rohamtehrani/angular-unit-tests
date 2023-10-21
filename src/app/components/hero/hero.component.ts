import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() hero?: Hero;
  @Output() delete = new EventEmitter<void>();

  onDeleteClick($event: any): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
