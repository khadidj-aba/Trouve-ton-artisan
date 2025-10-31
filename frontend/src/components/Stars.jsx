// src/components/Stars.jsx
export default function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;

  return (
    <span aria-label={`${value} sur 5`} style={{ fontSize: 20, lineHeight: 1 }}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} style={{ color: '#f5a623' }}>★</span>
      ))}
      {half && <span style={{ color: '#f5a623' }}>★</span>}
      {Array.from({ length: total - full - (half ? 1 : 0) }).map((_, i) => (
        <span key={`e${i}`} style={{ color: '#d9d9d9' }}>★</span>
      ))}
    </span>
  );
}
