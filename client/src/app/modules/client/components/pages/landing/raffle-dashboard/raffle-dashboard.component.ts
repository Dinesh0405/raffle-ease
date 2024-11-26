import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../../admin/components/shared/header/header.component";
import { FooterComponent } from "../../../../../admin/components/shared/footer/footer.component";

@Component({
  selector: 'app-raffle-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './raffle-dashboard.component.html',
  styleUrl: './raffle-dashboard.component.css'
})
export class RaffleDashboardComponent {

}
