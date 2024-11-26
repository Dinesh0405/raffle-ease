import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../../admin/components/shared/header/header.component";
import { FooterComponent } from "../../../../../admin/components/shared/footer/footer.component";

@Component({
  selector: 'app-raffle-creation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './raffle-creation.component.html',
  styleUrl: './raffle-creation.component.css'
})
export class RaffleCreationComponent {

}
