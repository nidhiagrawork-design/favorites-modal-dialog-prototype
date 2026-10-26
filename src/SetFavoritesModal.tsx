// Reference: Figma oFzaU8erKFMwWELFEXdFm5, "Flow 1 - Favourites" (node 378-11046),
// "Setting Favorite" screen (node 274-46456): a centered "Set Favorites" dialog
// launched from the company switcher's Favourites section, replacing inline
// star-toggle rows with a dedicated search + star list + Reset/Save flow.
import { useMemo, useState } from "react";
import { TextField } from "./design-system/TextField";
import { IconButton } from "./design-system/IconButton";
import { StarIcon, StarFillIcon, SearchIcon } from "./design-system/icons";
import type { Company } from "./companies";
import "./SetFavoritesModal.css";

type SetFavoritesModalProps = {
  companies: Company[];
  onSave: (favouriteIds: Set<string>) => void;
  onClose: () => void;
};

export function SetFavoritesModal({ companies, onSave, onClose }: SetFavoritesModalProps) {
  const initialFavouriteIds = useMemo(
    () => new Set(companies.filter((c) => c.favourite).map((c) => c.id)),
    [companies]
  );
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(() => new Set(initialFavouriteIds));
  const [search, setSearch] = useState("");

  const toggleFavourite = (id: string) => {
    setFavouriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const query = search.trim().toLowerCase();
  const visibleCompanies = useMemo(() => {
    const matches = companies.filter((c) => c.name.toLowerCase().includes(query));
    return [...matches].sort((a, b) => {
      const aFav = favouriteIds.has(a.id);
      const bFav = favouriteIds.has(b.id);
      if (aFav === bFav) return 0;
      return aFav ? -1 : 1;
    });
  }, [companies, query, favouriteIds]);

  return (
    <div className="set-favorites-modal__overlay" onClick={onClose}>
      <div
        className="set-favorites-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="set-favorites-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="set-favorites-modal__header">
          <h2 id="set-favorites-title" className="set-favorites-modal__title">
            Set Favorites
          </h2>
          <IconButton ariaLabel="Close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="set-favorites-modal__search-row">
          <TextField
            placeholder="Search for a company to mark as favourite"
            size="medium"
            addonBefore={<SearchIcon />}
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="set-favorites-modal__body">
          <div className="set-favorites-modal__section-label">All companies</div>
          <ul className="set-favorites-modal__list">
            {visibleCompanies.map((c) => {
              const isFavourite = favouriteIds.has(c.id);
              return (
                <li key={c.id} className="set-favorites-modal__row">
                  <button
                    type="button"
                    className="set-favorites-modal__star"
                    aria-pressed={isFavourite}
                    aria-label={isFavourite ? `Unmark ${c.name} as favourite` : `Mark ${c.name} as favourite`}
                    onClick={() => toggleFavourite(c.id)}
                  >
                    {isFavourite ? <StarFillIcon size={20} /> : <StarIcon size={20} />}
                  </button>
                  <span className="set-favorites-modal__row-label">{c.name}</span>
                </li>
              );
            })}
            {visibleCompanies.length === 0 && (
              <li className="set-favorites-modal__empty">No companies match "{search}"</li>
            )}
          </ul>
        </div>

        <div className="set-favorites-modal__footer">
          <button
            type="button"
            className="set-favorites-modal__button set-favorites-modal__button--secondary"
            onClick={() => setFavouriteIds(new Set())}
          >
            Reset
          </button>
          <button
            type="button"
            className="set-favorites-modal__button set-favorites-modal__button--primary"
            onClick={() => onSave(favouriteIds)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" data-icon="close">
      <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
