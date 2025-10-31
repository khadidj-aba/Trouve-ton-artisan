import { useState } from "react";
import "./SearchBar.css"; 

function SearchBar() {
  const [message, setMessage] = useState("");

  const handleFocus = () => {
    setMessage("Recherche en cours...");
  };

  const handleBlur = () => {
    setMessage("");
  };

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        {/* Icône */}
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un artisan (plombier, électricien...)"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {message && (
        <p className="search-message">
          {message}
        </p>
      )}
    </div>
  );
}

export default SearchBar;
