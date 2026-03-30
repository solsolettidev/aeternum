import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Camera as CameraIcon, Tag } from "lucide-react";

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  metadata?: {
    date?: string;
    location?: string;
    camera?: string;
    tags?: string[];
    album?: string;
  };
  onPrev?: () => void;
  onNext?: () => void;
}

const PhotoLightbox = ({ isOpen, onClose, src, alt = "", metadata, onPrev, onNext }: PhotoLightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          {onPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {onNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div
            className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={src}
              alt={alt}
              className="max-h-[75vh] max-w-full md:max-w-[65vw] object-contain rounded-lg"
            />

            {/* Metadata panel */}
            {metadata && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-background/90 backdrop-blur-md rounded-xl p-6 min-w-[240px] max-w-[300px]"
              >
                {metadata.album && (
                  <p className="font-serif text-lg text-foreground mb-4">{metadata.album}</p>
                )}
                <div className="flex flex-col gap-3">
                  {metadata.date && (
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-sans">{metadata.date}</span>
                    </div>
                  )}
                  {metadata.location && (
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-sans">{metadata.location}</span>
                    </div>
                  )}
                  {metadata.camera && (
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CameraIcon className="w-4 h-4 text-primary" />
                      <span className="font-sans">{metadata.camera}</span>
                    </div>
                  )}
                  {metadata.tags && metadata.tags.length > 0 && (
                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Tag className="w-4 h-4 text-primary mt-0.5" />
                      <div className="flex flex-wrap gap-1.5">
                        {metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-xs bg-accent px-2.5 py-1 rounded-full text-accent-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoLightbox;
