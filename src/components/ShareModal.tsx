import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Mail, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  albumName?: string;
}

const mockFriends = [
  { name: "Sofia Laurent", username: "@sofia", avatar: "S" },
  { name: "Clara Beaumont", username: "@clara.b", avatar: "C" },
  { name: "Isabelle Moreau", username: "@isa", avatar: "I" },
  { name: "Émilie Fontaine", username: "@emilie", avatar: "É" },
];

const ShareModal = ({ isOpen, onClose, albumName = "Album" }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const [permission, setPermission] = useState("viewer");

  const toggleFriend = (username: string) => {
    setSelectedFriends((prev) =>
      prev.includes(username) ? prev.filter((u) => u !== username) : [...prev, username]
    );
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-espresso/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-border/50">
              <div>
                <h3 className="font-serif text-lg text-foreground">Share Album</h3>
                <p className="text-xs font-sans text-muted-foreground mt-1">{albumName}</p>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Search */}
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-2 block">Invite friends</label>
                <input
                  type="text"
                  placeholder="Search by name or username..."
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              {/* Friends list */}
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {mockFriends.map((friend) => (
                  <button
                    key={friend.username}
                    onClick={() => toggleFriend(friend.username)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      selectedFriends.includes(friend.username)
                        ? "bg-accent"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-champagne flex items-center justify-center text-sm font-serif text-foreground">
                      {friend.avatar}
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm font-sans text-foreground">{friend.name}</p>
                      <p className="text-xs font-sans text-muted-foreground">{friend.username}</p>
                    </div>
                    {selectedFriends.includes(friend.username) && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>

              {/* Permission */}
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-2 block">Permission</label>
                <div className="flex gap-2">
                  {["viewer", "editor"].map((perm) => (
                    <button
                      key={perm}
                      onClick={() => setPermission(perm)}
                      className={`text-xs font-sans px-4 py-2 rounded-full transition-colors capitalize ${
                        permission === perm
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {perm}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs font-sans text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Other share options */}
              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 bg-muted hover:bg-accent text-sm font-sans text-foreground py-2.5 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <LinkIcon className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy link"}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-muted hover:bg-accent text-sm font-sans text-foreground py-2.5 rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                  Email invite
                </button>
              </div>

              {/* Send button */}
              {selectedFriends.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-primary text-primary-foreground text-sm font-sans py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Share with {selectedFriends.length} friend{selectedFriends.length > 1 ? "s" : ""}
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
