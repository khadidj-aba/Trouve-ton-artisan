export default function LoadingOverlay({ visible, text = "Recherche en cours..." }) {
  if (!visible) return null;
  return (
    <div className="overlay">
      <div className="overlay__card">
        <div className="overlay__spinner" aria-hidden />
        <p className="overlay__text">{text}</p>
      </div>
    </div>
  );
}
