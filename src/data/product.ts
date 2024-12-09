import { CartItem, Category, OrderItem, Product, RelatedProduct, Review, ShopInfo, Testimonial, WishlistItem } from "@/types/product"

export const newArrivals: Product[] = [
  {
    id: "1",
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    maxRating: 5,
    image: "https://aokhoacnam.vn/upload/product/akn-180/ao-khoac-gio-nam-den-chinh-hang.jpg",
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    maxRating: 5,
    image: "https://product.hstatic.net/1000360022/product/ao-khoac-varsity-nam-vai-da-phoi-vien-form-regular__6__ab39130f9a534b76946a0a7006618e76_1024x1024.jpg",
  },
  {
    id: "3",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    maxRating: 5,
    image: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_mlWonrW-LUQ7kNvgEUi0vk&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=A1R9miZSfMuKc-yBwzmoVUo&oh=00_AYBwgUEa0efJzIMsbHVzZufZoAyzEWr6GunOnO889YTm9w&oe=675A0763",
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    maxRating: 5,
    image: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468854925_1229461964976851_3633015965536218729_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJSeJh3Yc7gQ7kNvgETEfUT&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=AN0PHjRm34PhyuWI5el1rdx&oh=00_AYA_7KONach5n2Nij6hepSraOlUeQ2mF50Rxt_PHv4f1aQ&oe=675A0206",
  },
  {
    id: "5",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 5,
    maxRating: 5,
    image: "/placeholder.svg",
  },
  {
    id: "6",
    name: "Printed Slim Fit Shirt",
    price: 180,
    rating: 4,
    maxRating: 5,
    image: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468854925_1229461964976851_3633015965536218729_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJSeJh3Yc7gQ7kNvgETEfUT&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=AN0PHjRm34PhyuWI5el1rdx&oh=00_AYA_7KONach5n2Nij6hepSraOlUeQ2mF50Rxt_PHv4f1aQ&oe=675A0206",
  },
];


export const topSelling: Product[] = [
  {
    id: "1",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 5,
    maxRating: 5,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    maxRating: 5,
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    maxRating: 5,
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "5",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "6",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "7",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "8",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },  {
    id: "9",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "10",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },{
    id: "11",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    maxRating: 5,
    image: "/placeholder.svg",
  },
]

export const cartItem: CartItem[] = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "2",
    name: "Checkered Shirt",
    price: 180,
    size: "Medium",
    color: "Red",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "3",
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "4",
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "5",
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "6",
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "7",
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/placeholder.svg",
    quantity: 1,
  },
]

export const orderItem: OrderItem[] = [
  {
    id: '1',
    name: 'Hue Red-Whiskered Bulbul Code SE170128',
    price: 5000000,
    image: '/placeholder.svg',
    quantity: 2
  },
  {
    id: '2',
    name: 'Chinese Red-Whiskered Bulbul Code SE170128',
    price: 10000000,
    image: '/placeholder.svg',
    quantity: 2

  },
  {
    id: '3',
    name: 'Thai Red-Whiskered Bulbul Code SE170128',
    price: 5000000,
    image: '/placeholder.svg',
    quantity: 2

  },
  {
    id: '4',
    name: 'Cambodian Red-Whiskered Bulbul Code SE170128',
    price: 10000000,
    image: '/placeholder.svg',
    quantity: 2

  },
]
export const relatedProduct: RelatedProduct[]= [
    {
      id: "1",
      name: "Polo with Contrast Trims",
      price: 212,
      originalPrice: 242,
      rating: 4.0,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      rating: 5.0,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "5",
      name: "Vintage Denim Jacket",
      price: 280,
      originalPrice: 320,
      rating: 4.8,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "6",
      name: "Classic White Sneakers",
      price: 95,
      rating: 4.2,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "7",
      name: "Leather Messenger Bag",
      price: 199,
      originalPrice: 250,
      rating: 4.7,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "8",
      name: "Slim Fit Chino Pants",
      price: 85,
      rating: 4.3,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "9",
      name: "Wool Blend Overcoat",
      price: 350,
      originalPrice: 400,
      rating: 4.9,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "10",
      name: "Printed Silk Scarf",
      price: 65,
      rating: 4.1,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "11",
      name: "Leather Belt",
      price: 45,
      rating: 4.4,
      maxRating: 5,
      image: "/placeholder.svg"
    }
]
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "Alex K.",
    comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: "3",
    name: "James L.",
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  }, {
    id: "4",
    name: "James L.",
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  }, {
    id: "5",
    name: "James L.",
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  }, {
    id: "6",
    name: "James L.",
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  }, {
    id: "7",
    name: "James L.",
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  }
];
export const reviews: Review[] = [
  {
    id: "1",
    author: "Alice Johnson",
    rating: 5,
    comment: "Fantastic product! Really loved the quality and the customer service was great.",
    date: "2024-12-01",
    photos: [
      "https://via.placeholder.com/150?text=Photo+1",
      "https://via.placeholder.com/150?text=Photo+2",
      "https://via.placeholder.com/150?text=Photo+3",
    ],
  },
  {
    id: "2",
    author: "Bob Smith",
    rating: 4,
    comment: "Good value for money. The packaging could have been better, but overall satisfied.",
    date: "2024-12-05",
    photos: [
      "https://via.placeholder.com/150?text=Photo+4",
      "https://via.placeholder.com/150?text=Photo+5",
    ],
  },
  {
    id: "3",
    author: "Catherine Lee",
    rating: 3,
    comment: "The product works as described but shipping was delayed. Could be improved.",
    date: "2024-11-30",
    photos: [
      "https://via.placeholder.com/150?text=Photo+6",
    ],
  },
  {
    id: "4",
    author: "David Brown",
    rating: 2,
    comment: "Not satisfied. The product arrived damaged, and customer support took a long time to respond.",
    date: "2024-12-02",
    photos: [
      "https://via.placeholder.com/150?text=Photo+7",
      "https://via.placeholder.com/150?text=Photo+8", "https://via.placeholder.com/150?text=Photo+8", "https://via.placeholder.com/150?text=Photo+8", "https://via.placeholder.com/150?text=Photo+8",
    ],
  },
  {
    id: "5",
    author: "Emily Clark",
    rating: 5,
    comment: "Absolutely loved it! Would recommend to anyone looking for quality and style.",
    date: "2024-12-08",
    photos: [
      "https://via.placeholder.com/150?text=Photo+9",
      "https://via.placeholder.com/150?text=Photo+10",
      "https://via.placeholder.com/150?text=Photo+11",
      "https://via.placeholder.com/150?text=Photo+12",
    ],
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 2,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 3,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 4,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 5,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 6,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  }, {
    id: 7,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 8,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 9,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 10,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 11,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 12,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 13,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 14,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 15,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 16,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 17,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 18,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 19,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 20,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 21,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },{
    id: 22,
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },
];

export const orders: OrderItem[] = [
  {
    id: '1',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'completed'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  },
  {
    id: '2',
    name: 'Huế Bird',
    type: 'Bird Species: Songbird | Male',
    category: 'Category: Adult Bird',
    originalPrice: 5000000,
    discountedPrice: 4999000,
    image: '/placeholder.svg',
    status: 'cancelled'
  }
]

export const shopInfo: ShopInfo = {
  id: "1",
  name: "Fashion Emporium",
  rating: 4.5,
  totalReviews: 1234,
  followers: 5678,
  description: "Your one-stop shop for the latest fashion trends and timeless classics.",
  logo: "/placeholder.svg"
}

export const wishList: WishlistItem[] = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIloQi3tgZAxkQDNbN3hHwirzKN3QKbWRzA&s",
    quantity: 1,
  },
  {
    id: "2",
    name: "Checkered Shirt",
    price: 180,
    size: "Medium",
    color: "Red",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANdcdShgRopxhfjwKd8fdQFkHuhFgNO8DbY&s",
    quantity: 1,
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: 220,
    size: "Large",
    color: "Blue",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhzdWZKE8tfsFJAjOcEtBO3BgS-tDKtMDQw&s",
    quantity: 1,
  },
  {
    id: "4",
    name: "Hooded Sweatshirt",
    price: 175,
    size: "Small",
    color: "Black",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMd84OwXlGeOWMHF9eghy1BIlQ39LkxuZUw&s",
    quantity: 1,
  },
  {
    id: "5",
    name: "Classic Polo Shirt",
    price: 120,
    size: "Medium",
    color: "Green",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRjs3OkNs_WkrhySdo5COewmlm5G6LOzrUA&s",
    quantity: 1,
  },
  {
    id: "6",
    name: "Casual Sneakers",
    price: 300,
    size: "9 (US)",
    color: "White",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKcDEwxwRs2OknOSCS9UJXsPVO3DkCqIpVA&s",
    quantity: 1,
  },
  {
    id: "7",
    name: "Leather Belt",
    price: 75,
    size: "One Size",
    color: "Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Lp48pdSMy0cyVQaY4BXFA69i79YR8WAJw&s",
    quantity: 1,
  },
  {
    id: "8",
    name: "Slim Fit Jeans",
    price: 200,
    size: "32",
    color: "Dark Blue",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVjP8OuHPSbThmjNeaqOZyMfpoXnn82pSnQ&s",
    quantity: 1,
  },
  {
    id: "9",
    name: "Woolen Scarf",
    price: 90,
    size: "One Size",
    color: "Gray",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXeyv2PjKrGMbFbKZKvTFL8_qZBh_XUHIhg&s",
    quantity: 1,
  },
  {
    id: "10",
    name: "Bucket Hat",
    price: 50,
    size: "One Size",
    color: "Beige",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9V0upLHoB6Yufq5uNLXPE10OFekWxWt_oA&s",
    quantity: 1,
  },
];