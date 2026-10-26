// Reference: Figma oFzaU8erKFMwWELFEXdFm5, "Flow 1 - Favourites" (node 378-11046).
// Unlike the inline star-toggle flow, favouriting here happens in a separate
// "Set Favorites" modal (node 274-46456) launched from the sliders icon next
// to the Favourites section header; the dropdown itself only selects.
import { useMemo, useState } from "react";
import { TextField } from "./design-system/TextField";
import { IconButton } from "./design-system/IconButton";
import {
  ChevronDownIcon,
  CheckmarkIcon,
  SlidersVIcon,
  SearchIcon,
} from "./design-system/icons";
import { initialCompanies, type Company } from "./companies";
import { SetFavoritesModal } from "./SetFavoritesModal";
import "./CompanySwitcher.css";

const CONSOLIDATED_VIEW = "__consolidated__";

export function CompanySwitcher() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);
  const [favouritesExpanded, setFavouritesExpanded] = useState(true);
  const [allExpanded, setAllExpanded] = useState(true);
  const [selectedId, setSelectedId] = useState<string>(CONSOLIDATED_VIEW);
  const [favoritesModalOpen, setFavoritesModalOpen] = useState(false);

  const applyFavorites = (favouriteIds: Set<string>) => {
    setCompanies((prev) => prev.map((c) => ({ ...c, favourite: favouriteIds.has(c.id) })));
    setFavoritesModalOpen(false);
  };

  const query = search.trim().toLowerCase();
  const matches = (name: string) => name.toLowerCase().includes(query);

  const favourites = useMemo(
    () => companies.filter((c) => c.favourite && matches(c.name)),
    [companies, query]
  );
  const allCompanies = useMemo(
    () => companies.filter((c) => matches(c.name)),
    [companies, query]
  );

  return (
    <div className="company-switcher">
      <button
        type="button"
        className="company-switcher__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="company-switcher__trigger-label">Consolidated...</span>
        <ChevronDownIcon size={16} className="company-switcher__trigger-chevron" />
      </button>

      {open && (
        <>
          <div className="company-switcher__scrim" onClick={() => setOpen(false)} />
          <div className="company-switcher__panel" role="menu" data-node-name="Setting Favorites">
            <div className="company-switcher__search-row">
              <TextField
                placeholder="Search for a company"
                size="medium"
                addonBefore={<SearchIcon />}
                value={search}
                onChange={setSearch}
              />
            </div>
            <div className="company-switcher__divider" />

            <div className="company-switcher__content">
              <button
                type="button"
                className="company-switcher__row company-switcher__row--consolidated"
                onClick={() => setSelectedId(CONSOLIDATED_VIEW)}
              >
                <span className="company-switcher__row-icon">
                  {selectedId === CONSOLIDATED_VIEW && <CheckmarkIcon size={20} />}
                </span>
                <span className="company-switcher__row-label">Consolidated View</span>
              </button>

              <section className="company-switcher__section">
                <div className="company-switcher__section-header">
                  <button
                    type="button"
                    className="company-switcher__section-title"
                    onClick={() => setFavouritesExpanded((v) => !v)}
                    aria-expanded={favouritesExpanded}
                  >
                    <ChevronDownIcon
                      size={20}
                      className={`company-switcher__section-chevron${favouritesExpanded ? "" : " company-switcher__section-chevron--collapsed"}`}
                    />
                    Favourites
                  </button>
                  <IconButton
                    ariaLabel="Set favorites"
                    size="24"
                    onClick={() => setFavoritesModalOpen(true)}
                  >
                    <SlidersVIcon size={24} />
                  </IconButton>
                </div>
                {favouritesExpanded && (
                  <ul className="company-switcher__list">
                    {favourites.map((c) => (
                      <li key={c.id} className="company-switcher__row company-switcher__row--company">
                        <button
                          type="button"
                          className="company-switcher__row-select"
                          onClick={() => setSelectedId(c.id)}
                        >
                          <span className="company-switcher__row-icon">
                            {selectedId === c.id && <CheckmarkIcon size={20} />}
                          </span>
                          <span className="company-switcher__row-label">{c.name}</span>
                        </button>
                      </li>
                    ))}
                    {favourites.length === 0 && (
                      <li className="company-switcher__empty">No favourites match "{search}"</li>
                    )}
                  </ul>
                )}
              </section>

              <section className="company-switcher__section">
                <button
                  type="button"
                  className="company-switcher__section-header"
                  onClick={() => setAllExpanded((v) => !v)}
                  aria-expanded={allExpanded}
                >
                  <span className="company-switcher__section-title">
                    <ChevronDownIcon
                      size={20}
                      className={`company-switcher__section-chevron${allExpanded ? "" : " company-switcher__section-chevron--collapsed"}`}
                    />
                    All Companies ({allCompanies.length})
                  </span>
                </button>
                {allExpanded && (
                  <ul className="company-switcher__list">
                    {allCompanies.map((c) => (
                      <li
                        key={c.id}
                        className="company-switcher__row company-switcher__row--company company-switcher__row--hoverable"
                      >
                        <button
                          type="button"
                          className="company-switcher__row-select"
                          onClick={() => setSelectedId(c.id)}
                        >
                          <span className="company-switcher__row-icon">
                            {selectedId === c.id && <CheckmarkIcon size={20} />}
                          </span>
                          <span className="company-switcher__row-label">{c.name}</span>
                        </button>
                      </li>
                    ))}
                    {allCompanies.length === 0 && (
                      <li className="company-switcher__empty">No companies match "{search}"</li>
                    )}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </>
      )}

      {favoritesModalOpen && (
        <SetFavoritesModal
          companies={companies}
          onSave={applyFavorites}
          onClose={() => setFavoritesModalOpen(false)}
        />
      )}
    </div>
  );
}
