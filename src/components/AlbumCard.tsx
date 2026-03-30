import { motion } from "framer-motion";
import { Lock, Users, Image as ImageIcon } from "lucide-react";

interface AlbumCardProps {
  title: string;
  photoCount: number;
  dateRange: string;
  coverImage: string;
  isShared?: boolean;
  variant?: "large" | "medium" | "small";
  className?: string;
  onClick?: () => void;
}

const AlbumCard = ({
  title,
  photoCount,
  dateRange,
  coverImage,
  isShared = false,
  variant = "medium",
  className = "",
  onClick,
}: AlbumCardProps) => {
  const heightClass = variant === "large" ? "h-[420px] md:h-[520px]" : variant === "small" ? "h-[240px] md:h-[300px]" : "h-[300px] md:h-[400px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${heightClass} ${className}`}
    >
      <img
        src={coverImage}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 right-4">
        {isShared ? (
          <span className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-xs font-sans text-muted-foreground px-3 py-1.5 rounded-full">
            <Users className="w-3 h-3" /> Shared
          </span>
        ) : (
          <span className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-xs font-sans text-muted-foreground px-3 py-1.5 rounded-full">
            <Lock className="w-3 h-3" /> Private
          </span>
        )}
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-serif text-primary-foreground text-lg md:text-xl mb-1">{title}</h3>
        <div className="flex items-center gap-3 text-primary-foreground/70 text-xs font-sans">
          <span className="flex items-center gap-1">
            <ImageIcon className="w-3 h-3" /> {photoCount} photos
          </span>
          <span>·</span>
          <span>{dateRange}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AlbumCard;
