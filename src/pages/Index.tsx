import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AlbumCard from "@/components/AlbumCard";
import PhotoCard from "@/components/PhotoCard";
import heroImage from "@/assets/hero-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Scattered polaroid photos on linen"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-sans tracking-[0.25em] uppercase text-muted-foreground mb-6"
          >
            A private gallery for your memories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 text-balance"
          >
            Where memories <br />
            <em className="text-primary">become art</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Curate your photographs into beautiful albums. Preserve dates, stories, and share intimate moments with the people who matter most.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/gallery"
              className="bg-primary text-primary-foreground font-sans text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Create an album
            </Link>
            <Link
              to="/gallery"
              className="text-foreground font-sans text-sm px-8 py-3.5 rounded-full border border-border hover:bg-accent transition-colors duration-300"
            >
              Explore gallery
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Albums */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">Collections</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Curated Albums</h2>
        </motion.div>

        {/* Asymmetric album grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-7">
            <AlbumCard
              title="Summer in Provence"
              photoCount={47}
              dateRange="Jun – Aug 2025"
              coverImage={gallery2}
              isShared
              variant="large"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-5">
            <AlbumCard
              title="Morning Light"
              photoCount={23}
              dateRange="Mar 2025"
              coverImage={gallery1}
              variant="medium"
            />
            <AlbumCard
              title="Coastal Walks"
              photoCount={31}
              dateRange="Sep 2024"
              coverImage={gallery3}
              isShared
              variant="small"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
          <div className="md:col-span-4">
            <AlbumCard
              title="Still Life"
              photoCount={12}
              dateRange="Feb 2025"
              coverImage={gallery4}
              variant="medium"
            />
          </div>
          <div className="md:col-span-4">
            <AlbumCard
              title="Garden Notes"
              photoCount={19}
              dateRange="Apr 2025"
              coverImage={gallery5}
              variant="medium"
            />
          </div>
          <div className="md:col-span-4">
            <AlbumCard
              title="Wandering"
              photoCount={38}
              dateRange="Jan – Mar 2025"
              coverImage={gallery6}
              isShared
              variant="medium"
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Recent Memories</h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm font-sans text-primary hover:text-rose-deep transition-colors hidden md:block"
          >
            View all →
          </Link>
        </motion.div>

        {/* Editorial masonry preview */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          <PhotoCard src={gallery1} date="Mar 15, 2025" className="h-[320px] md:h-[400px]" />
          <PhotoCard src={gallery4} date="Feb 8, 2025" className="h-[220px] md:h-[280px]" />
          <PhotoCard src={gallery2} date="Jul 22, 2025" className="h-[280px] md:h-[350px]" />
          <PhotoCard src={gallery5} date="Apr 3, 2025" className="h-[350px] md:h-[420px]" />
          <PhotoCard src={gallery3} date="Sep 10, 2024" className="h-[260px] md:h-[320px]" />
          <PhotoCard src={gallery6} date="Jan 28, 2025" className="h-[300px] md:h-[380px]" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-4">Begin your collection</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Every photograph tells a story <br />worth preserving
          </h2>
          <p className="font-sans text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Create your personal archive. Upload, organize, and share your most meaningful moments in a space designed for beauty and intimacy.
          </p>
          <Link
            to="/login"
            className="inline-block bg-primary text-primary-foreground font-sans text-sm px-10 py-4 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Start your gallery
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg text-foreground">Mémoira</span>
          <p className="text-xs font-sans text-muted-foreground">
            A private gallery for your most cherished memories
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
