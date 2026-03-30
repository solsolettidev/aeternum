import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface PhotoCardProps {
  src: string;
  alt?: string;
  date?: string;
  onClick?: () => void;
  className?: string;
}

const PhotoCard = ({ src, alt = "", date, onClick, className = "" }: PhotoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-md cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-500" />
      
      {/* Hover overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center justify-between">
          {date && (
            <span className="text-xs font-sans text-primary-foreground/80 bg-espresso/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {date}
            </span>
          )}
          <button className="bg-background/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
