import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../../admin/components/shared/header/header.component";
import { FooterComponent } from "../../../../../admin/components/shared/footer/footer.component";

@Component({
  selector: 'app-raffle-landing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './raffle-landing.component.html',
  styleUrl: './raffle-landing.component.css'
})
export class RaffleLandingComponent {

}
