import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Users, Settings, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import AlbumCard from "@/components/AlbumCard";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-5xl mx-auto px-6 md:px-10">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-16"
        >
          <div className="w-24 h-24 rounded-full bg-champagne flex items-center justify-center text-2xl font-serif text-foreground shrink-0">
            A
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-foreground mb-1">Amélie Rousseau</h1>
            <p className="text-sm font-sans text-muted-foreground mb-4">@amelie.r</p>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-md mb-6">
              Collecting light, textures, and quiet moments. Lover of golden hour, old books, and slow mornings.
            </p>

            <div className="flex items-center gap-8 text-sm font-sans text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-serif text-foreground">142</p>
                <p className="text-xs">Photos</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-serif text-foreground">8</p>
                <p className="text-xs">Albums</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-serif text-foreground">5</p>
                <p className="text-xs">Friends</p>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 border border-border text-sm font-sans text-foreground px-5 py-2.5 rounded-full hover:bg-muted/50 transition-colors">
            <Settings className="w-4 h-4" /> Edit profile
          </button>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 transition-colors group">
            <Upload className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-sans text-foreground">Upload photos</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 transition-colors group">
            <ImageIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-sans text-foreground">New album</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/50 transition-colors group">
            <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-sans text-foreground">Add friend</span>
          </button>
        </motion.div>

        {/* Albums */}
        <div>
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">Your albums</p>
          <h2 className="font-serif text-2xl text-foreground mb-8">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AlbumCard title="Morning Light" photoCount={23} dateRange="Mar 2025" coverImage={gallery1} variant="medium" />
            <AlbumCard title="Summer in Provence" photoCount={47} dateRange="Jun – Aug 2025" coverImage={gallery2} isShared variant="medium" />
            <AlbumCard title="Coastal Walks" photoCount={31} dateRange="Sep 2024" coverImage={gallery3} isShared variant="medium" />
            <AlbumCard title="Garden Notes" photoCount={19} dateRange="Apr 2025" coverImage={gallery5} variant="medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
