import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import FriendCard from "@/components/FriendCard";

const friends = [
  { name: "Sofia Laurent", username: "@sofia", avatar: "S", mutualAlbums: 3, status: "friend" as const },
  { name: "Clara Beaumont", username: "@clara.b", avatar: "C", mutualAlbums: 1, status: "friend" as const },
  { name: "Isabelle Moreau", username: "@isa", avatar: "I", mutualAlbums: 2, status: "friend" as const },
  { name: "Émilie Fontaine", username: "@emilie", avatar: "É", mutualAlbums: 0, status: "pending" as const },
  { name: "Margaux Delacroix", username: "@margaux", avatar: "M", mutualAlbums: 0, status: "invited" as const },
];

const Friends = () => {
  const [tab, setTab] = useState<"all" | "pending">("all");

  const filtered = tab === "pending" ? friends.filter((f) => f.status !== "friend") : friends;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">Your circle</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Friends</h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search friends..."
                className="w-full bg-muted/40 border border-border rounded-full pl-10 pr-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Tabs */}
              <div className="flex gap-1 bg-muted/60 rounded-full p-1">
                {(["all", "pending"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`text-xs font-sans px-4 py-2 rounded-full transition-all capitalize ${
                      tab === t ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                    }`}
                  >
                    {t === "all" ? "All" : "Requests"}
                  </button>
                ))}
              </div>

              <button className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-sans px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                <UserPlus className="w-4 h-4" /> Invite
              </button>
            </div>
          </div>
        </motion.div>

        {/* Friends list */}
        <div className="space-y-3">
          {filtered.map((friend) => (
            <FriendCard key={friend.username} {...friend} />
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-serif text-xl text-foreground mb-2">No pending requests</p>
            <p className="text-sm font-sans text-muted-foreground">All caught up — your circle is at peace.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Friends;
