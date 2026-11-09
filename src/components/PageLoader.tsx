import { BrandLogo } from './BrandLogo'

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <BrandLogo variant="symbol" symbolClassName="h-12 w-12 animate-pulse" eager />
        <span className="eyebrow text-espresso/50">Menyiapkan menu…</span>
      </div>
    </div>
  )
}
