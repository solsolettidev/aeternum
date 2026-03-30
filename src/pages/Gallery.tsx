import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PhotoCard from "@/components/PhotoCard";
import PhotoLightbox from "@/components/PhotoLightbox";
import GalleryViewSelector, { type GalleryView } from "@/components/GalleryViewSelector";
import FilterChips from "@/components/FilterChips";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, date: "Mar 15, 2025", album: "Morning Light", location: "Paris", camera: "Fujifilm X-T5", tags: ["portrait", "golden hour"] },
  { src: gallery2, date: "Jul 22, 2025", album: "Summer in Provence", location: "Aix-en-Provence", camera: "Sony A7IV", tags: ["still life", "interior"] },
  { src: gallery3, date: "Sep 10, 2024", album: "Coastal Walks", location: "Biarritz", camera: "Fujifilm X-T5", tags: ["landscape", "ocean"] },
  { src: gallery4, date: "Feb 8, 2025", album: "Still Life", location: "Home", camera: "iPhone 15 Pro", tags: ["coffee", "lifestyle"] },
  { src: gallery5, date: "Apr 3, 2025", album: "Garden Notes", location: "Giverny", camera: "Sony A7IV", tags: ["botanical", "macro"] },
  { src: gallery6, date: "Jan 28, 2025", album: "Wandering", location: "Marrakech", camera: "Fujifilm X-T5", tags: ["architecture", "travel"] },
  { src: gallery1, date: "Dec 12, 2024", album: "Winter Light", location: "Lyon", camera: "Fujifilm X-T5", tags: ["portrait", "winter"] },
  { src: gallery4, date: "Nov 5, 2024", album: "Café Days", location: "Bordeaux", camera: "iPhone 15 Pro", tags: ["coffee", "lifestyle"] },
];

const filters = ["All", "Portraits", "Landscapes", "Still Life", "Travel", "Botanical"];

const Gallery = () => {
  const [view, setView] = useState<GalleryView>("masonry");
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const openLightbox = (index: number) => setLightbox({ index });
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">Your collection</p>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Gallery</h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <FilterChips filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <GalleryViewSelector currentView={view} onViewChange={setView} />
          </div>
        </motion.div>

        {/* Gallery views */}
        {view === "masonry" && (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <PhotoCard
                key={i}
                src={photo.src}
                date={photo.date}
                onClick={() => openLightbox(i)}
                className={`${i % 3 === 0 ? "h-[320px] md:h-[420px]" : i % 3 === 1 ? "h-[240px] md:h-[300px]" : "h-[280px] md:h-[360px]"}`}
              />
            ))}
          </div>
        )}

        {view === "editorial" && (
          <div className="space-y-8">
            {/* Featured large + small row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <PhotoCard src={photos[0].src} date={photos[0].date} onClick={() => openLightbox(0)} className="h-[400px] md:h-[520px]" />
              </div>
              <div className="md:col-span-4 flex flex-col gap-4">
                <PhotoCard src={photos[1].src} date={photos[1].date} onClick={() => openLightbox(1)} className="h-[190px] md:h-[250px]" />
                <PhotoCard src={photos[2].src} date={photos[2].date} onClick={() => openLightbox(2)} className="h-[190px] md:h-[250px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.slice(3).map((photo, i) => (
                <PhotoCard
                  key={i + 3}
                  src={photo.src}
                  date={photo.date}
                  onClick={() => openLightbox(i + 3)}
                  className="h-[220px] md:h-[320px]"
                />
              ))}
            </div>
          </div>
        )}

        {view === "timeline" && (
          <div className="space-y-16">
            {["2025", "2024"].map((year) => (
              <div key={year}>
                <h3 className="font-serif text-2xl text-foreground mb-6 border-b border-border/50 pb-3">{year}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photos
                    .filter((p) => p.date.includes(year))
                    .map((photo, i) => (
                      <div key={i}>
                        <PhotoCard
                          src={photo.src}
                          onClick={() => openLightbox(photos.indexOf(photo))}
                          className="h-[200px] md:h-[260px] mb-2"
                        />
                        <p className="text-xs font-sans text-muted-foreground">{photo.date}</p>
                        <p className="text-xs font-sans text-foreground/70">{photo.album}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {view === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <PhotoCard
                key={i}
                src={photo.src}
                date={photo.date}
                onClick={() => openLightbox(i)}
                className="aspect-square"
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <PhotoLightbox
        isOpen={!!lightbox}
        onClose={closeLightbox}
        src={lightbox ? photos[lightbox.index].src : ""}
        metadata={
          lightbox
            ? {
                date: photos[lightbox.index].date,
                location: photos[lightbox.index].location,
                camera: photos[lightbox.index].camera,
                tags: photos[lightbox.index].tags,
                album: photos[lightbox.index].album,
              }
            : undefined
        }
        onPrev={lightbox && lightbox.index > 0 ? () => setLightbox({ index: lightbox.index - 1 }) : undefined}
        onNext={lightbox && lightbox.index < photos.length - 1 ? () => setLightbox({ index: lightbox.index + 1 }) : undefined}
      />
    </div>
  );
};

export default Gallery;
