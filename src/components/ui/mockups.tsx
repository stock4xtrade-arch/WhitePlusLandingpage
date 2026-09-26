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
      className={`rounded-md px-1.5 py-0.5 text-[11px] font-semibold tabular-nums ${
        up ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
      }`}
    >
      {up ? "▲" : "▼"} {change}
    </span>
  );
}

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-navy-900/10">
      <div className="flex items-center gap-2 border-b border-line bg-navy-50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-medium text-navy-500">WhitePlus Terminal — Live</span>
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-[minmax(0,1fr)_200px]">
        <div className="bg-white p-4">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs font-medium text-navy-500">NIFTY 50 · 5m</p>
              <p className="font-display text-2xl font-bold tabular-nums text-navy-900">24,812.40</p>
            </div>
            <ChangeChip change="+0.84%" up />
          </div>

          <div className="mt-5 flex h-36 items-end gap-1.5" aria-hidden="true">
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-sm ${index % 3 === 1 ? "bg-brand-200" : "bg-brand-600"}`}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Open", value: "24,610" },
              { label: "High", value: "24,878" },
              { label: "Low", value: "24,545" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-navy-50 py-2">
                <p className="text-[11px] text-navy-500">{item.label}</p>
                <p className="text-sm font-semibold tabular-nums text-navy-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-3">
          <p className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-wider text-navy-500">
            Market Watch
          </p>
          <ul className="space-y-1">
            {tickers.map((ticker) => (
              <li key={ticker.symbol} className="rounded-lg px-2 py-1.5 hover:bg-navy-50">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-navy-800">{ticker.symbol}</span>
                  <ChangeChip change={ticker.change} up={ticker.up} />
                </div>
                <span className="text-xs tabular-nums text-navy-500">{ticker.price}</span>
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
    <div className="w-full max-w-[220px] rounded-[2rem] border-4 border-navy-900 bg-navy-900 p-1 shadow-2xl shadow-navy-900/25">
      <div className="overflow-hidden rounded-[1.6rem] bg-white">
        <div className="flex items-center justify-center bg-navy-900 pb-2 pt-1">
          <span className="h-1.5 w-16 rounded-full bg-navy-700" />
        </div>
        <div className="px-3 pb-4 pt-3">
          <p className="mb-3 text-xs font-semibold text-navy-900">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PhoneWatch() {
  return (
    <PhoneFrame title="Market Watch">
      <ul className="space-y-2">
        {tickers.slice(0, 5).map((ticker) => (
          <li key={ticker.symbol} className="flex items-center justify-between rounded-lg bg-navy-50 px-2 py-1.5">
            <div>
              <p className="text-[11px] font-semibold text-navy-800">{ticker.symbol}</p>
              <p className="text-[10px] tabular-nums text-navy-500">{ticker.price}</p>
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
      <div className="rounded-lg bg-navy-50 p-2">
        <div className="flex h-28 items-end gap-1" aria-hidden="true">
          {bars.slice(0, 10).map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-sm ${index % 4 === 2 ? "bg-red-400" : "bg-emerald-500"}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none rounded-lg bg-emerald-600 py-2 text-[11px] font-semibold text-white"
        >
          Buy
        </button>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none rounded-lg bg-red-500 py-2 text-[11px] font-semibold text-white"
        >
          Sell
        </button>
      </div>
    </PhoneFrame>
  );
}

export function PhonePositions() {
  return (
    <PhoneFrame title="Positions">
      <div className="rounded-lg bg-brand-700 px-3 py-2.5 text-white">
        <p className="text-[10px] text-brand-100">Net P&amp;L</p>
        <p className="font-display text-lg font-bold tabular-nums">+ ₹ 1,84,220</p>
      </div>
      <ul className="mt-2 space-y-1.5">
        {[
          { name: "NIFTY 24800 CE", qty: "5 lots", pnl: "+12,480", up: true },
          { name: "XAU/USD", qty: "1.2 lots", pnl: "-3,140", up: false },
          { name: "RELIANCE", qty: "250 qty", pnl: "+8,910", up: true },
        ].map((row) => (
          <li key={row.name} className="flex items-center justify-between rounded-lg bg-navy-50 px-2 py-1.5">
            <div>
              <p className="text-[11px] font-semibold text-navy-800">{row.name}</p>
              <p className="text-[10px] text-navy-500">{row.qty}</p>
            </div>
            <span
              className={`text-[11px] font-semibold tabular-nums ${row.up ? "text-emerald-600" : "text-red-600"}`}
            >
              {row.pnl}
            </span>
          </li>
        ))}
      </ul>
    </PhoneFrame>
  );
}
