import { Component } from '@angular/core';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  public faStar = faStar;
  public faQuoteLeft = faQuoteLeft;

}
