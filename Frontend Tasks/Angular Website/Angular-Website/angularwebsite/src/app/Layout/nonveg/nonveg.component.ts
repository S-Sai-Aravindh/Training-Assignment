import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nonveg',
  imports: [CommonModule],
  templateUrl: './nonveg.component.html',
  styleUrl: './nonveg.component.css'
})
export class NonvegComponent {
  nonVegDishes = [
    {
      name: 'Butter Chicken',
      image: './images/butter.jpg',
      description: 'Succulent chicken pieces cooked in a creamy, buttery tomato sauce.'
    },
    {
      name: 'Chicken Biryani',
      image: './images/chicken2.jpg',
      description: 'A fragrant rice dish with spiced chicken, saffron, and herbs.'
    },
    {
      name: 'Mutton Rogan Josh',
      image: './images/mutton.jpg',
      description: 'A rich, aromatic curry made with tender mutton pieces in a flavorful gravy.'
    },
    {
      name: 'Fish Curry',
      image: './images/fish.avif',
      description: 'Spicy and tangy fish curry made with fresh, succulent fish in a rich gravy.'
    },
    {
      name: 'Tandoori Chicken',
      image: './images/tandori.jpeg',
      description: 'Marinated chicken grilled to perfection in a tandoor with smoky flavors.'
    },
    {
      name: 'Chicken Shawarma',
      image: './images/Chicken-Shawarma.jpg',
      description: 'Tender grilled chicken wrapped in pita bread with fresh veggies and tahini sauce.'
    }
  ];
}
