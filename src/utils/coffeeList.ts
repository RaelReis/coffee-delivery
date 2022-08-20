import americanCoffee from '../assets/american_coffee.png'
import arabe from '../assets/arabe.png'
import comLeite from '../assets/com_leite.png'
import gelado from '../assets/gelado.png'
import capuccino from '../assets/capuccino.png'
import chocolateQuente from '../assets/chocolate_quente.png'
import cubano from '../assets/cubano.png'
import expressoCremoso from '../assets/expresso_cremoso.png'
import expressoTradicional from '../assets/expresso_tradicional.png'
import havaiano from '../assets/havaiano.png'
import irlandes from '../assets/irlandes.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mochaccino.png'

type Tags = {
  id: string
  name: string
}

export interface Coffee {
  id: string
  name: string
  description: string
  imageUrl: string
  tags: Tags[]
  price: number
  quantity: number
}

export const coffeeList = [
  {
    id: '1',
    name: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageUrl: expressoTradicional,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
    ],
    price: 9.99,
  },
  {
    id: '2',
    name: 'Expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageUrl: americanCoffee,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
    ],
    price: 9.99,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageUrl: expressoCremoso,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
    ],
    price: 9.99,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageUrl: gelado,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '2',
        name: 'gelado',
      },
    ],
    price: 9.99,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageUrl: comLeite,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '3',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageUrl: latte,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '3',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageUrl: capuccino,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '3',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageUrl: macchiato,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '2',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageUrl: mocaccino,
    tags: [
      {
        id: '1',
        name: 'tradicional',
      },
      {
        id: '3',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageUrl: chocolateQuente,
    tags: [
      {
        id: '4',
        name: 'especial',
      },
      {
        id: '3',
        name: 'com leite',
      },
    ],
    price: 9.99,
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageUrl: cubano,
    tags: [
      {
        id: '4',
        name: 'especial',
      },
      {
        id: '2',
        name: 'gelado',
      },
      {
        id: '5',
        name: 'alcoólico',
      },
    ],
    price: 9.99,
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageUrl: havaiano,
    tags: [
      {
        id: '4',
        name: 'especial',
      },
    ],
    price: 9.99,
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageUrl: arabe,
    tags: [
      {
        id: '4',
        name: 'especial',
      },
    ],
    price: 9.99,
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageUrl: irlandes,
    tags: [
      {
        id: '4',
        name: 'especial',
      },
      {
        id: '5',
        name: 'alcoólico',
      },
    ],
    price: 9.99,
  },
]
