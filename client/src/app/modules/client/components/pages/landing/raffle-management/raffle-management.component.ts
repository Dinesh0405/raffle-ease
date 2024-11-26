import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../admin/components/shared/header/header.component';
import { FooterComponent } from '../../../../../admin/components/shared/footer/footer.component';

@Component({
  selector: 'app-raffle-management',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './raffle-management.component.html',
  styleUrl: './raffle-management.component.css'
})
export class RaffleManagementComponent {

}
