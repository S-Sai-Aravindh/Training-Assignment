import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-veg',
  imports: [CommonModule],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.css'
})
export class VegComponent {
  vegDishes = [
    {
      name: 'Vegetable Biryani',
      image: './images/veg biriyani.jpg',
      description: 'Flavored basmati rice mixed with seasonal vegetables and aromatic spices.'
    },
    {
      name: 'Paneer Tikka',
      image: './images/panner.webp',
      description: 'Grilled paneer marinated with a blend of spices and served with mint chutney.'
    },
    {
      name: 'Dal Tadka',
      image: './images/dal.jpeg',
      description: 'A flavorful lentil curry cooked with tempering and garnished with fresh coriander.'
    }
  ];
}
