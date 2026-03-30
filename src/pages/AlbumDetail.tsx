import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Lock, Share2, Calendar, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import PhotoCard from "@/components/PhotoCard";
import PhotoLightbox from "@/components/PhotoLightbox";
import ShareModal from "@/components/ShareModal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const albumPhotos = [
  { src: gallery2, date: "Jul 22, 2025" },
  { src: gallery3, date: "Jul 18, 2025" },
  { src: gallery6, date: "Jul 15, 2025" },
  { src: gallery4, date: "Jul 10, 2025" },
  { src: gallery1, date: "Jun 28, 2025" },
  { src: gallery5, date: "Jun 20, 2025" },
];

const members = [
  { name: "You", role: "Owner", avatar: "Y" },
  { name: "Sofia Laurent", role: "Editor", avatar: "S" },
  { name: "Clara Beaumont", role: "Viewer", avatar: "C" },
];

const AlbumDetail = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Cover */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={gallery2} alt="Album cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 -mt-24 relative z-10 pb-20">
        {/* Album info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground bg-accent px-3 py-1 rounded-full">
              <Users className="w-3 h-3" /> Shared album
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-3">Summer in Provence</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-sans text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Jun – Aug 2025</span>
            <span className="flex items-center gap-1.5"><ImageIcon className="w-4 h-4" /> 47 photos</span>
          </div>

          {/* Members */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              {members.map((m) => (
                <div
                  key={m.name}
                  className="w-9 h-9 rounded-full bg-champagne border-2 border-background flex items-center justify-center text-xs font-serif text-foreground"
                  title={`${m.name} · ${m.role}`}
                >
                  {m.avatar}
                </div>
              ))}
            </div>
            <span className="text-xs font-sans text-muted-foreground">{members.length} members</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setShareOpen(true)}
              className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-sans px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 border border-border text-sm font-sans text-foreground px-6 py-2.5 rounded-full hover:bg-muted/50 transition-colors">
              Upload photos
            </button>
          </div>
        </motion.div>

        {/* Members detail */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-card rounded-xl p-5"
        >
          <h3 className="font-serif text-lg text-foreground mb-4">Members</h3>
          <div className="space-y-3">
            {members.map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center text-sm font-serif text-foreground">
                  {m.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-sans text-foreground">{m.name}</p>
                </div>
                <span className={`text-xs font-sans px-3 py-1 rounded-full ${
                  m.role === "Owner" ? "bg-primary/10 text-primary" :
                  m.role === "Editor" ? "bg-champagne text-foreground" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photos grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {albumPhotos.map((photo, i) => (
            <PhotoCard
              key={i}
              src={photo.src}
              date={photo.date}
              onClick={() => setLightbox(i)}
              className={`${i % 3 === 0 ? "h-[300px] md:h-[400px]" : i % 3 === 1 ? "h-[220px] md:h-[280px]" : "h-[260px] md:h-[340px]"}`}
            />
          ))}
        </div>
      </div>

      <PhotoLightbox
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
        src={lightbox !== null ? albumPhotos[lightbox].src : ""}
        metadata={lightbox !== null ? { date: albumPhotos[lightbox].date, album: "Summer in Provence" } : undefined}
        onPrev={lightbox !== null && lightbox > 0 ? () => setLightbox(lightbox - 1) : undefined}
        onNext={lightbox !== null && lightbox < albumPhotos.length - 1 ? () => setLightbox(lightbox + 1) : undefined}
      />

      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} albumName="Summer in Provence" />
    </div>
  );
};

export default AlbumDetail;
