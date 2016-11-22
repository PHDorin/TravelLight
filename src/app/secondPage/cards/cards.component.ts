import { Component, OnInit, Input } from '@angular/core';
//import { CostInfoService } from '../cost-info.service';
import { SendCostDataService } from '../../send-cost-data.service'

@Component({
  selector: 'app-cards',
  template: `
    <div class='cards flex-container'>
      <app-car-card class="flex-item" [costData]="costData"></app-car-card>
      <app-airplane-card class="flex-item" [costData]="costData"></app-airplane-card>
      <app-walk-card class="flex-item" [costData]="costData"></app-walk-card>
      <app-train-card class="flex-item" [costData]="costData"></app-train-card>
    </div>
  `,
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private sendCostDataService: SendCostDataService) {}
    @Input() costData: any;
    ngOnInit() {
      console.log(this.sendCostDataService.dataStore[0])
      this.costData = this.sendCostDataService.dataStore[0]
    }
}