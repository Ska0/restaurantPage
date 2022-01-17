import pizzaImage from '../assets/pizza.png';
import nachosImage from '../assets/nachos.png';

export function menuLaunch() {

   content.innerHTML = '';

const menu = document.createElement('div');
menu.id = 'menu';

const menuHeader = document.createElement('div');
menuHeader.id = 'menu-head';
menuHeader.textContent = 'Call And Order!';
menu.appendChild(menuHeader);

const pizzaLabel = document.createElement('div');
pizzaLabel.className = 'menu-pizza';
pizzaLabel.textContent = 'Pizza';
menu.appendChild(pizzaLabel);

const pizza = new Image();
pizza.src = pizzaImage;
pizza.id = 'pizza';
menu.appendChild(pizza);

const nachoLabel = document.createElement('div');
nachoLabel.className = 'menu-nacho';
nachoLabel.textContent = 'Nachos';
menu.appendChild(nachoLabel);

const nachos = new Image();
nachos.src = nachosImage;
nachos.id = 'nachos';
menu.appendChild(nachos);

content.appendChild(menu);

}
