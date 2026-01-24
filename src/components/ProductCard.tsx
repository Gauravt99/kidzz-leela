/**
 * ProductCard Component
 * 
 * Displays individual product with image, name, price, and badges.
 * Used across Home and Collections pages.
 * 
 * Props:
 * - product: Product data from collections.json
 * - All styling uses design system tokens
 */

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  discountLabel: string | null;
  image: string;
  sizes: string[];
  colors: string[];
  isNew: boolean;
  isBestSeller: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    name,
    price,
    originalPrice,
    discountLabel,
    image,
    sizes,
    isNew,
    isBestSeller,
  } = product;

  return (
    <article className="card-playful group cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges container */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="badge-new">✨ New</span>
          )}
          {isBestSeller && (
            <span className="badge-bestseller">⭐ Best Seller</span>
          )}
          {discountLabel && (
            <span className="badge-sale">{discountLabel}</span>
          )}
        </div>
        
        {/* Quick action overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
          <button className="btn-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Available sizes */}
        <div className="flex flex-wrap gap-1">
          {sizes.slice(0, 5).map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
            >
              {size}
            </span>
          ))}
          {sizes.length > 5 && (
            <span className="text-xs px-2 py-1 text-muted-foreground">
              +{sizes.length - 5}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
