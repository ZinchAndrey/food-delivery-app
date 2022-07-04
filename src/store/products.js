export default {
  state() {
    return {
      products: [
        {
          id: '001',
          category: 'pizza',
          title: 'Quattro formaggi',
          price: '455',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          size: '32cm',
          img: 'assets/products/pizza/image26-1.jpg'
        },
        {
          id: '002',
          category: 'pizza',
          title: 'Carbonara',
          price: '435',
          description: 'Cheddar, Blue, Parmesan',
          size: '32cm',
          img: 'assets/products/pizza/image26-2.jpg',
          hit: true,
        },
        {
          id: '003',
          category: 'pizza',
          title: 'Di mare',
          price: '495',
          description: 'Cheddar, Blue, Dough, Mozzarella',
          size: '32cm',
          img: 'assets/products/pizza/image26-3.jpg'
        },
        {
          id: '004',
          category: 'pizza',
          title: 'Carbonara',
          price: '415',
          description: 'Cheddar, Blue, Dough, Mozzarella',
          size: '32cm',
          img: 'assets/products/pizza/image26-4.jpg'
        },
        {
          id: '005',
          category: 'pizza',
          title: 'Quattro formaggi',
          price: '455',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          size: '32cm',
          img: 'assets/products/pizza/image26-1.jpg'
        },
        {
          id: '006',
          category: 'pizza',
          title: 'Carbonara',
          price: '435',
          description: 'Cheddar, Blue, Parmesan',
          size: '32cm',
          img: 'assets/products/pizza/image26-2.jpg',
          hit: true,
        },
        {
          id: '007',
          category: 'pizza',
          title: 'Di mare',
          price: '495',
          description: 'Cheddar, Blue, Dough, Mozzarella',
          size: '32cm',
          img: 'assets/products/pizza/image26-3.jpg'
        },
        {
          id: '008',
          category: 'pizza',
          title: 'Carbonara',
          price: '415',
          description: 'Cheddar, Blue, Dough, Mozzarella',
          size: '32cm',
          img: 'assets/products/pizza/image26-4.jpg'
        },
        {
          id: '009',
          category: 'sushi',
          title: 'Philadelphia',
          price: '415',
          description: 'угорь, авокадо, краб-микс, сыр, тобико, соус «Нисуаз», лук зеленый, кунжут, имбирь',
          size: '6шт.',
          img: 'assets/products/sushi/philadelphia-01.webp'
        },
        {
          id: '010',
          category: 'sushi',
          title: 'California',
          price: '440',
          description: 'краб-микс, авокадо, огурец, тобико',
          hit: true,
          size: '6шт.',
          img: 'assets/products/sushi/california.webp'
        },
        {
          id: '012',
          category: 'sushi',
          title: 'Суши с авокадо',
          price: '110',
          description: 'рис, свежее авокадо',
          hit: true,
          size: '25г',
          img: 'assets/products/sushi/sushi-avocado.webp'
        },
        {
          id: '012',
          category: 'sushi',
          title: 'Суши с лососем',
          price: '110',
          description: 'рис, свежий лосось',
          size: '25г',
          img: 'assets/products/sushi/sushi-fish.webp'
        },
        {
          id: '013',
          category: 'salad',
          title: 'Цезарь с курицей',
          price: '485',
          description: 'курица, сыр, салат романо, салат айсберг, перепелиное яйцо, гренки, соус «Цезарь»',
          hit: true,
          size: '205г',
          img: 'assets/products/salads/ceasar.webp'
        },
        {
          id: '014',
          category: 'salad',
          title: 'Цезарь с креветками',
          price: '535',
          description: 'креветки, сыр, салат романо, салат айсберг, перепелиное яйцо, гренки, соус «Цезарь»',
          size: '205г',
          img: 'assets/products/salads/ceasar-shrimp.webp'
        },
        {
          id: '015',
          category: 'drinks',
          title: 'Смузи персик-клубника',
          price: '390',
          description: 'персиковое персик, клубника, апельсиновый сок, лед',
          size: '500г',
          img: 'assets/products/drinks/smoothie-01.webp'
        },
        {
          id: '015',
          category: 'drinks',
          title: 'Айс ти пуэр-ягоды',
          price: '515',
          description: 'пуэр, сироп пряные ягоды, сироп бергамот, минеральная вода, лед',
          size: '1000г',
          img: 'assets/products/drinks/smoothie-02.webp'
        },
      ]
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
}

