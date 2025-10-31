export default function LoaderSkeleton({ count = 6 }) {
  return (
    <div className="grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton" aria-hidden />
      ))}
    </div>
  );
}
