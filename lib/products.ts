export interface Product {
  id: string
  name: string
  category: 'floral' | 'woody' | 'oriental' | 'fresh' | 'unisex'
  price: string
  description: string
  longDescription: string
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  longevity: string
  projection: string
  occasions: string[]
  new?: boolean
  bestseller?: boolean
}

export const products: Product[] = [
  {
    id: 'velvet-rose',
    name: 'Velvet Rose',
    category: 'floral',
    price: '₦8,500',
    description: 'Top: Bulgarian Rose | Middle: Peony | Base: Sandalwood',
    longDescription:
      'Velvet Rose is a luxurious floral fragrance that captures the essence of romance and elegance. The opening burst of Bulgarian rose immediately sets an opulent tone, transitioning smoothly into the delicate heart of peony. The base of warm sandalwood provides a sensual, lasting finish that makes this fragrance perfect for evening wear or special occasions.',
    notes: {
      top: ['Bulgarian Rose', 'Bergamot'],
      middle: ['Peony', 'Damask Rose'],
      base: ['Sandalwood', 'Musk', 'Amber'],
    },
    longevity: '8-10 hours',
    projection: 'High',
    occasions: ['Evening', 'Date Night', 'Special Events'],
    bestseller: true,
  },
  {
    id: 'midnight-woods',
    name: 'Midnight Woods',
    category: 'woody',
    price: '₦9,500',
    description: 'Top: Black Pepper | Middle: Cedarwood | Base: Oud',
    longDescription:
      'Midnight Woods is a sophisticated woody fragrance for the confident individual. Bold black pepper opens the composition, creating an intriguing spice that gives way to the creamy warmth of cedarwood. The deep oud base ensures this fragrance lingers beautifully, making it ideal for both daytime and evening wear.',
    notes: {
      top: ['Black Pepper', 'Cardamom'],
      middle: ['Cedarwood', 'Vetiver'],
      base: ['Oud', 'Patchouli', 'Musk'],
    },
    longevity: '10-12 hours',
    projection: 'Very High',
    occasions: ['Everyday', 'Work', 'Evening'],
    bestseller: true,
  },
  {
    id: 'amber-enigma',
    name: 'Amber Enigma',
    category: 'oriental',
    price: '₦8,800',
    description: 'Top: Bergamot | Middle: Amber | Base: Musk',
    longDescription:
      'Amber Enigma is a mysterious and alluring oriental fragrance that captivates with its warm, sensual character. Fresh bergamot opens the composition, creating a bright contrast to the rich amber heart. The musky base creates an irresistible lingering scent that works beautifully for both day and night.',
    notes: {
      top: ['Bergamot', 'Lemon'],
      middle: ['Amber', 'Vanilla', 'Tonka Bean'],
      base: ['Musk', 'Sandalwood', 'Amber'],
    },
    longevity: '9-11 hours',
    projection: 'High',
    occasions: ['Everyday', 'Evening', 'Date Night'],
    new: true,
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'fresh',
    price: '₦7,500',
    description: 'Top: Citrus | Middle: Sea Salt | Base: Driftwood',
    longDescription:
      'Ocean Breeze brings the freshness of a seaside getaway to your skin. Vibrant citrus notes create an energizing opening, while the unique sea salt accord adds a crisp, salty-aquatic feel. The driftwood base grounds the composition with a soft, natural warmth, making this perfect for everyday wear.',
    notes: {
      top: ['Grapefruit', 'Lemon', 'Bergamot'],
      middle: ['Sea Salt', 'Aquatic Notes'],
      base: ['Driftwood', 'Cedarwood', 'Ambroxan'],
    },
    longevity: '6-8 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Summer', 'Casual'],
    bestseller: true,
  },
  {
    id: 'unisex-essence',
    name: 'Unisex Essence',
    category: 'unisex',
    price: '₦8,200',
    description: 'Top: Lemon | Middle: Iris | Base: Vetiver',
    longDescription:
      'Unisex Essence is a beautifully balanced fragrance that transcends gender boundaries. Fresh lemon awakens the senses, leading into the sophisticated iris middle note that provides elegance and refinement. The earthy vetiver base creates a grounding finish, making this a versatile choice for any occasion.',
    notes: {
      top: ['Lemon', 'Pink Pepper'],
      middle: ['Iris', 'Orris Root'],
      base: ['Vetiver', 'Cedarwood', 'Musk'],
    },
    longevity: '8-9 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Work', 'Casual'],
  },
  {
    id: 'golden-bloom',
    name: 'Golden Bloom',
    category: 'floral',
    price: '₦8,500',
    description: 'Top: Ylang-Ylang | Middle: Jasmine | Base: Vanilla',
    longDescription:
      'Golden Bloom is a luminous floral fragrance that radiates warmth and joy. The sweet, exotic ylang-ylang opens with an intoxicating presence, while creamy jasmine flowers dominate the heart of the fragrance. A tender vanilla base wraps everything in a soft, inviting embrace, making this perfect for those who love sweet florals.',
    notes: {
      top: ['Ylang-Ylang', 'Mandarin'],
      middle: ['Jasmine', 'Tuberose', 'Orange Blossom'],
      base: ['Vanilla', 'Sandalwood', 'Amber'],
    },
    longevity: '9-10 hours',
    projection: 'High',
    occasions: ['Everyday', 'Date Night', 'Special Events'],
    new: true,
  },
  {
    id: 'spice-elegance',
    name: 'Spice Elegance',
    category: 'woody',
    price: '₦9,000',
    description: 'Top: Cinnamon | Middle: Clove | Base: Sandalwood',
    longDescription:
      'Spice Elegance is a warm, inviting woody fragrance with an aromatic spice theme. Cinnamon spice opens with warmth and comfort, transitioning into the clove-rich heart. A creamy sandalwood base completes the composition, creating a fragrance that is both sophisticated and approachable.',
    notes: {
      top: ['Cinnamon', 'Ginger'],
      middle: ['Clove', 'Nutmeg'],
      base: ['Sandalwood', 'Cedar', 'Vanilla'],
    },
    longevity: '9-10 hours',
    projection: 'High',
    occasions: ['Everyday', 'Fall/Winter', 'Evening'],
  },
  {
    id: 'pink-paradise',
    name: 'Pink Paradise',
    category: 'floral',
    price: '₦8,300',
    description: 'Top: Peach | Middle: Peony | Base: Musk',
    longDescription:
      'Pink Paradise is a delicate and feminine floral fragrance that delights with its fruity-floral character. Juicy peach opens the composition with sweetness, leading to the romantic heart of peony. A soft musk base ensures this fragrance stays close to the skin, creating an intimate aura.',
    notes: {
      top: ['Peach', 'Passion Fruit'],
      middle: ['Peony', 'Rose'],
      base: ['Musk', 'Amber', 'Sandalwood'],
    },
    longevity: '7-9 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Spring/Summer', 'Casual'],
    new: true,
  },
  {
    id: 'oud-mystique',
    name: 'Oud Mystique',
    category: 'oriental',
    price: '₦10,500',
    description: 'Top: Rose | Middle: Saffron | Base: Oud',
    longDescription:
      'Oud Mystique is a luxurious oriental fragrance that celebrates the richness of oud. Rose petals open with elegance, while saffron adds a spiced, sophisticated middle note. The deep, resinous oud base creates a mysterious, intoxicating finish that lingers for hours.',
    notes: {
      top: ['Rose', 'Lemon'],
      middle: ['Saffron', 'Amber'],
      base: ['Oud', 'Musk', 'Sandalwood'],
    },
    longevity: '12+ hours',
    projection: 'Very High',
    occasions: ['Evening', 'Special Events', 'Winter'],
    bestseller: true,
  },
  {
    id: 'fresh-citrus',
    name: 'Fresh Citrus',
    category: 'fresh',
    price: '₦7,200',
    description: 'Top: Orange | Middle: Neroli | Base: Amber',
    longDescription:
      'Fresh Citrus is a vibrant, energizing fragrance that captures the essence of sun-ripened citrus fruits. Bright orange opens immediately with zest and joy, transitioning into the floral neroli heart. A subtle amber base adds warmth and depth, creating a refreshing yet sophisticated scent.',
    notes: {
      top: ['Orange', 'Lemon', 'Grapefruit'],
      middle: ['Neroli', 'Petitgrain'],
      base: ['Amber', 'Musk'],
    },
    longevity: '6-7 hours',
    projection: 'Medium',
    occasions: ['Everyday', 'Morning', 'Work'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function searchProducts(
  query: string,
  filters?: {
    category?: string
  }
): Product[] {
  let results = products

  if (filters?.category) {
    results = results.filter((p) => p.category === filters.category)
  }

  if (query.trim()) {
    const lowerQuery = query.toLowerCase()
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.notes.top.some((n) => n.toLowerCase().includes(lowerQuery)) ||
        p.notes.middle.some((n) => n.toLowerCase().includes(lowerQuery)) ||
        p.notes.base.some((n) => n.toLowerCase().includes(lowerQuery))
    )
  }

  return results
}
