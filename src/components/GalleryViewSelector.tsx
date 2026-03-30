import { Grid3x3, LayoutGrid, Clock, Columns3 } from "lucide-react";

export type GalleryView = "masonry" | "editorial" | "timeline" | "grid";

interface GalleryViewSelectorProps {
  currentView: GalleryView;
  onViewChange: (view: GalleryView) => void;
}

const views: { id: GalleryView; label: string; icon: React.ReactNode }[] = [
  { id: "masonry", label: "Masonry", icon: <Columns3 className="w-4 h-4" /> },
  { id: "editorial", label: "Editorial", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "timeline", label: "Timeline", icon: <Clock className="w-4 h-4" /> },
  { id: "grid", label: "Grid", icon: <Grid3x3 className="w-4 h-4" /> },
];

const GalleryViewSelector = ({ currentView, onViewChange }: GalleryViewSelectorProps) => {
  return (
    <div className="flex items-center gap-1 bg-muted/60 rounded-full p-1">
      {views.map((view) => (
        <button
          key={view.id}
          onClick={() => onViewChange(view.id)}
          className={`flex items-center gap-1.5 text-xs font-sans px-3.5 py-2 rounded-full transition-all duration-300 ${
            currentView === view.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {view.icon}
          <span className="hidden sm:inline">{view.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GalleryViewSelector;
