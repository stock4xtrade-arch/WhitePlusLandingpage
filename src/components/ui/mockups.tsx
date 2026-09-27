const tickers = [
  { symbol: "NIFTY 50", price: "24,812.40", change: "+0.84%", up: true },
  { symbol: "BANKNIFTY", price: "52,190.15", change: "+1.12%", up: true },
  { symbol: "XAU/USD", price: "2,412.88", change: "-0.32%", up: false },
  { symbol: "EUR/USD", price: "1.0874", change: "+0.11%", up: true },
  { symbol: "BTC/USDT", price: "67,240.00", change: "-1.04%", up: false },
  { symbol: "AAPL", price: "228.34", change: "+0.46%", up: true },
];

const bars = [38, 52, 44, 66, 58, 74, 62, 88, 72, 94, 81, 99];

function ChangeChip({ change, up }: { change: string; up: boolean }) {
  return (
    <span
      className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium tabular-nums ${
        up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"
      }`}
    >
      {change}
    </span>
  );
}

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="ml-2 text-[11px] font-medium text-ink-muted">WhitePlus Terminal — Live</span>
      </div>

      <div className="grid gap-px bg-line-soft sm:grid-cols-[minmax(0,1fr)_200px]">
        <div className="bg-surface p-5">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-[11px] font-medium text-ink-faint">NIFTY 50 · 5m</p>
              <p className="font-display text-2xl font-semibold tabular-nums text-ink">24,812.40</p>
            </div>
            <ChangeChip change="+0.84%" up />
          </div>

          <div className="mt-6 flex h-36 items-end gap-1.5" aria-hidden="true">
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-[3px] ${index % 3 === 1 ? "bg-ink/10" : "bg-ink/75"}`}
              />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Open", value: "24,610" },
              { label: "High", value: "24,878" },
              { label: "Low", value: "24,545" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-surface-soft py-2.5">
                <p className="text-[11px] text-ink-faint">{item.label}</p>
                <p className="text-[13px] font-medium tabular-nums text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-3">
          <p className="px-1 pb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">
            Market Watch
          </p>
          <ul className="space-y-0.5">
            {tickers.map((ticker) => (
              <li key={ticker.symbol} className="rounded-lg px-2 py-1.5 transition-colors hover:bg-surface-soft">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-ink">{ticker.symbol}</span>
                  <ChangeChip change={ticker.change} up={ticker.up} />
                </div>
                <span className="text-[11px] tabular-nums text-ink-faint">{ticker.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[210px] rounded-[2rem] border-[6px] border-ink bg-ink p-0.5">
      <div className="overflow-hidden rounded-[1.6rem] bg-surface">
        <div className="flex items-center justify-center bg-ink pb-2 pt-1">
          <span className="h-1 w-14 rounded-full bg-white/25" />
        </div>
        <div className="px-3 pb-4 pt-3">
          <p className="mb-3 text-[11px] font-medium text-ink">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PhoneWatch() {
  return (
    <PhoneFrame title="Market Watch">
      <ul className="space-y-1.5">
        {tickers.slice(0, 5).map((ticker) => (
          <li
            key={ticker.symbol}
            className="flex items-center justify-between rounded-lg bg-surface-soft px-2 py-1.5"
          >
            <div>
              <p className="text-[10px] font-medium text-ink">{ticker.symbol}</p>
              <p className="text-[10px] tabular-nums text-ink-faint">{ticker.price}</p>
            </div>
            <ChangeChip change={ticker.change} up={ticker.up} />
          </li>
        ))}
      </ul>
    </PhoneFrame>
  );
}

export function PhoneChart() {
  return (
    <PhoneFrame title="BTC/USDT · 15m">
      <div className="rounded-lg bg-surface-soft p-2">
        <div className="flex h-28 items-end gap-1" aria-hidden="true">
          {bars.slice(0, 10).map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-[2px] ${index % 4 === 2 ? "bg-ink/15" : "bg-ink/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2" aria-hidden="true">
        <span className="rounded-full bg-ink py-1.5 text-center text-[10px] font-medium text-white">Buy</span>
        <span className="rounded-full border border-line py-1.5 text-center text-[10px] font-medium text-ink">
          Sell
        </span>
      </div>
    </PhoneFrame>
  );
}

export function PhonePositions() {
  return (
    <PhoneFrame title="Positions">
      <div className="rounded-xl bg-ink px-3 py-2.5 text-white">
        <p className="text-[10px] text-white/50">Net P&amp;L</p>
        <p className="font-display text-lg font-semibold tabular-nums">+ ₹ 1,84,220</p>
      </div>
      <ul className="mt-2 space-y-1.5">
        {[
          { name: "NIFTY 24800 CE", qty: "5 lots", pnl: "+12,480", up: true },
          { name: "XAU/USD", qty: "1.2 lots", pnl: "-3,140", up: false },
          { name: "RELIANCE", qty: "250 qty", pnl: "+8,910", up: true },
        ].map((row) => (
          <li key={row.name} className="flex items-center justify-between rounded-lg bg-surface-soft px-2 py-1.5">
            <div>
              <p className="text-[10px] font-medium text-ink">{row.name}</p>
              <p className="text-[10px] text-ink-faint">{row.qty}</p>
            </div>
            <span
              className={`text-[10px] font-medium tabular-nums ${row.up ? "text-emerald-600" : "text-rose-600"}`}
            >
              {row.pnl}
            </span>
          </li>
        ))}
      </ul>
    </PhoneFrame>
  );
}
