export function BrandIcon({ icon, size = 28 }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d={icon.path} />
  </svg>;
}
