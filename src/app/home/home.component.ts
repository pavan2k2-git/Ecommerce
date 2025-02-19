import { Component, inject, OnInit } from '@angular/core';
import { BikesService } from '../service/bikes.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  #bikeservice = inject(BikesService);

  bikes: any = [];
 
  ngOnInit(): void {
    this.bikes = this.#bikeservice.getBikes().slice(1,2);
  }
}
