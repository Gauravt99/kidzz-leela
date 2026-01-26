import siteContent from '@/config/siteContent.json';

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

const { whatsapp } = siteContent;
const WHATSAPP_PHONE = whatsapp.phone;
const WHATSAPP_TEMPLATE = whatsapp.messageTemplate;

const createWhatsAppLink = (
  phone: string,
  template: string,
  productName: string
) => {
   
  const message = template.replace("{productName}", productName);
  const params = new URLSearchParams({ text: message });  
  return `https://wa.me/${phone}?${params.toString()}`;
};

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 1.93.5 3.74 1.43 5.33L2 22l4.87-1.52a9.86 9.86 0 005.17 1.45h.01c5.46 0 9.94-4.48 9.94-9.94C22 6.53 17.5 2 12.04 2z" />
  </svg>
);

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

        {/* WhatsApp Button */}
        <a
          href={createWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_TEMPLATE, name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            absolute bottom-3 right-3
            bg-[#25D366] hover:bg-[#1EBE5D]
            text-white
            p-2 rounded-full shadow-lg
            transition-transform hover:scale-110
          "
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <span className="badge-new">✨ New</span>}
          {isBestSeller && (
            <span className="badge-bestseller">⭐ Best Seller</span>
          )}
          {discountLabel && <span className="badge-sale">{discountLabel}</span>}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
          {/* <button className="btn-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </button> */}
          <a
            href={createWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_TEMPLATE, name)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn-primary
              opacity-0 group-hover:opacity-100
              transform translate-y-4 group-hover:translate-y-0
              transition-all duration-300
            "
            onClick={(e) => e.stopPropagation()}
          >
            View Details
          </a>
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
            ₹{price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ₹{originalPrice.toFixed(2)}
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
