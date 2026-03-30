import { motion } from "framer-motion";

interface FriendCardProps {
  name: string;
  username: string;
  avatar: string;
  mutualAlbums?: number;
  status?: "friend" | "pending" | "invited";
}

const statusLabels: Record<string, { text: string; className: string }> = {
  friend: { text: "Friend", className: "bg-accent text-accent-foreground" },
  pending: { text: "Pending", className: "bg-champagne text-foreground" },
  invited: { text: "Invited", className: "bg-rose/30 text-rose-deep" },
};

const FriendCard = ({ name, username, avatar, mutualAlbums = 0, status = "friend" }: FriendCardProps) => {
  const st = statusLabels[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors duration-300 group"
    >
      <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center text-base font-serif text-foreground shrink-0">
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-sans text-foreground truncate">{name}</p>
        <p className="text-xs font-sans text-muted-foreground">{username}</p>
        {mutualAlbums > 0 && (
          <p className="text-xs font-sans text-muted-foreground mt-0.5">
            {mutualAlbums} shared album{mutualAlbums > 1 ? "s" : ""}
          </p>
        )}
      </div>
      <span className={`text-xs font-sans px-3 py-1 rounded-full ${st.className}`}>
        {st.text}
      </span>
    </motion.div>
  );
};

export default FriendCard;
