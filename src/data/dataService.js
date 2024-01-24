import { v4 as uuidv4 } from 'uuid';

const services = [
  {
    name: 'Mакіяж',
    img: '/img/services/makeup.jpg',
    price: 700,
  },
  {
    name: 'Eкладка зачіска',
    img: '/img/services/hairstyle.jpg',
    price: 600,
  },
  {
    name: 'Брови',
    img: '/img/services/eyebrows.jpg',
    price: 500,
  },
  {
    name: 'Повний образ',
    img: '/img/services/wedding.jpg',
    price: 1300,
  },
];

const courses = [
  {
    id: uuidv4(),
    name: 'Сам собі візажист',
    text: 'Курс на якому ви навчитеся робити собі базовий макіяж з усіма тонкощами і методами нанесення макіяжу. Який підійде під будь-який захід.',
    classes: '5',
    time: '1,5',
    price: 4500,
    img: '/img/courses/myself.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Візажист з 0',
    text: 'Цей курс призначений для людей які хочуть освоїти професію візажиста. Навчиться робити різні види макіяжу і стати професіоналом у цій справі.',
    classes: '15',
    time: '2',
    price: 12000,
    img: '/img/courses/viz0.jpeg',
  },
];

export { services, courses };
