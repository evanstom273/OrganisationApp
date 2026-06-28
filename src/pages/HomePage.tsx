export default function HomePage() {
  return (
    <section className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6">
      {/* Top row: Capture | Inbox | Quote */}
      <div className="grid gap-4 lg:grid-cols-[1.95fr_1fr_1fr]">
        {/* Quick Capture */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ws-warm)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3.5v4" /><path d="M12 16.5v4" />
              <path d="M4.5 12h4" /><path d="M15.5 12h4" />
              <path d="M6.8 6.8l2.8 2.8" /><path d="M14.4 14.4l2.8 2.8" />
              <path d="M17.2 6.8l-2.8 2.8" /><path d="M9.6 14.4l-2.8 2.8" />
            </svg>
            Quick capture
          </div>
          <p className="text-xl font-[560] tracking-tight text-zinc-900 dark:text-zinc-100 mb-5">
            Capture a thought, task, link, or idea…
          </p>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-4">
            {[
              { label: 'Note', color: '#7dd1d4', icon: <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5v4h4"/><path d="M9.5 12h5"/><path d="M9.5 16h5"/></> },
              { label: 'Task', color: '#f1bc63', icon: <><path d="M8 6.5h10.5V18H5.5V6.5H8z"/><path d="M8 3.5h4"/><path d="M9 12l2 2 4-5"/></> },
              { label: 'Link', color: '#87aef0', icon: <><path d="M10 14l4-4"/><path d="M8 16.5H6.5a3.5 3.5 0 1 1 0-7H8"/><path d="M16 7.5h1.5a3.5 3.5 0 1 1 0 7H16"/></> },
              { label: 'Image', color: '#b595f8', icon: <><rect x="4.5" y="5.5" width="15" height="13" rx="2.5"/><circle cx="9" cy="10" r="1.4"/><path d="M7 16l3.5-3.5 2.5 2.5 2-2L18 16"/></> },
            ].map(({ label, color, icon }) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200/70 bg-zinc-50/90 px-3 py-3 text-sm font-[560] transition hover:-translate-y-px hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                style={{ color }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Inbox */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Inbox</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Things waiting for your mind.</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ color: 'var(--ws-rose)', background: 'color-mix(in srgb, var(--ws-rose) 14%, transparent)', border: '1px solid color-mix(in srgb, var(--ws-rose) 20%, transparent)' }}>
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 9.5h15V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18z"/>
                <path d="M4.5 9.5L8 5h8l3.5 4.5"/>
                <path d="M9 13.5h6"/>
              </svg>
            </div>
          </div>
          <p className="text-4xl font-[650] tracking-[-0.05em] text-zinc-900 dark:text-zinc-100">12</p>
          <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-[560] hover:opacity-80" style={{ color: '#ff9f7f' }}>
            View inbox →
          </a>
        </div>

        {/* Quote */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] flex flex-col justify-between gap-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ color: 'var(--ws-warm)', background: 'rgba(240,178,101,0.08)', border: '1px solid rgba(240,178,101,0.18)' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 10.5c0-2.2 1.3-4.2 3.2-5.3-.7 1.2-1 2.2-1 3.3 0 1.7.8 3 2.3 3.8v5.1H8.5z"/>
              <path d="M16 10.5c0-2.2 1.3-4.2 3.2-5.3-.7 1.2-1 2.2-1 3.3 0 1.7.8 3 2.3 3.8v5.1H16z"/>
            </svg>
          </div>
          <p className="text-lg font-medium leading-snug text-zinc-900 dark:text-zinc-100 max-w-[15ch]">
            Ideas are easy. It's the capturing that counts.
          </p>
          <div className="flex items-center justify-between gap-3" style={{ color: 'var(--ws-warm)', opacity: 0.86 }}>
            <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(240,178,101,0), rgba(240,178,101,0.8), rgba(240,178,101,0))' }} />
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3.5l1.9 5.1 5.4.2-4.2 3.1 1.5 5.2L12 14.1 7.4 17l1.5-5.2-4.2-3.1 5.4-.2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-4 lg:grid-cols-[1.9fr_1fr]">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Active Projects */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Active Projects</h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Living piles of potential, gently held together.</p>
              </div>
              <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 whitespace-nowrap">View all projects →</a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6">
              {[
                {
                  name: 'Story Ideas', desc: 'Characters, plots, fragments, and worldbuilding threads.', status: 'Active',
                  color: 'var(--ws-violet)', notes: 23, tasks: 7, files: 4,
                  icon: <><path d="M4 7.5c0-1.1.9-2 2-2h3.2l2 2H18a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8.5 7.5v9"/><path d="M12 9.5v7"/></>
                },
                {
                  name: 'Game Dev', desc: 'Mechanics, strange loops, UI notes, and prototype crumbs.', status: 'Prototype',
                  color: 'var(--ws-teal)', notes: 18, tasks: 5, files: 3,
                  icon: <><path d="M8 8l3-2.5 2 2L16 6l3 2v8l-3 2-3-1.5-2 2L8 16 5 18V8z"/><path d="M9 12h.01"/><path d="M15 12h.01"/></>
                },
                {
                  name: 'Writing', desc: 'Essays, fragments, outlines, and those almost-there endings.', status: 'Active',
                  color: 'var(--ws-sky)', notes: 31, tasks: 9, files: 6,
                  icon: <><path d="M7 16.5l9.5-9.5 2 2L9 18.5H7z"/><path d="M14.5 6l3.5 3.5"/></>
                },
                {
                  name: 'Music Notes', desc: 'Melodies, gig thoughts, lyrics, and hazy production sketches.', status: 'Goblin Spark',
                  color: 'var(--ws-amber)', notes: 16, tasks: 4, files: 2,
                  icon: <><path d="M9 18.5V7.5l8-2v8"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="16" r="2"/></>
                },
                {
                  name: 'Life Admin', desc: 'Appointments, documents, bills, and practical chaos.', status: 'Haunting Me',
                  color: 'var(--ws-danger)', notes: 14, tasks: 11, files: 7,
                  icon: <><path d="M7 7.5h10"/><path d="M7 12h10"/><path d="M7 16.5h10"/><circle cx="5" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="16.5" r="1" fill="currentColor" stroke="none"/></>
                },
                {
                  name: 'App Concepts', desc: 'Loose product sparks, systems thinking, and odd little tools.', status: 'Research',
                  color: '#b393ff', notes: 9, tasks: 3, files: 2,
                  icon: <><path d="M12 4.5v15"/><path d="M7 9.5c0-2.8 2.2-5 5-5s5 2.2 5 5c0 2-1 3.5-3 4.5"/><path d="M9 20h6"/><path d="M8 14c.8.8 2.2 1.5 4 1.5s3.2-.7 4-1.5"/></>
                },
              ].map(({ name, desc, status, color, notes, tasks, files, icon }) => (
                <div
                  key={name}
                  className="relative grid gap-3 rounded-[1.375rem] border border-zinc-200/70 bg-zinc-50/80 p-4 transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                >
                  <div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-90"
                    style={{ background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, ${color} 28%, transparent), transparent 56%)` }}
                  />
                  <div className="relative flex items-start justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ color, background: `color-mix(in srgb, ${color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 22%, transparent)` }}>
                      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 dark:text-zinc-500 mt-1">
                      <path d="M14.5 4.5l5 5"/><path d="M13 6l5 5"/><path d="M8 11l5 5"/><path d="M11.5 14.5L5 21"/>
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{name}</h3>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 min-h-[2.4em]">{desc}</p>
                  </div>
                  <span className="relative inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-[650]" style={{ background: `color-mix(in srgb, ${color} 14%, transparent)`, color: `color-mix(in srgb, ${color} 70%, white 30%)`, border: `1px solid color-mix(in srgb, ${color} 18%, transparent)` }}>
                    {status}
                  </span>
                  <div className="relative flex flex-wrap gap-1.5">
                    {[
                      { label: `${notes} notes`, icon: <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5v4h4"/></> },
                      { label: `${tasks} tasks`, icon: <><path d="M8 6.5h10.5V18H5.5V6.5H8z"/><path d="M9 12l2 2 4-5"/></> },
                      { label: `${files} files`, icon: <><rect x="5" y="6.5" width="14" height="11" rx="2"/></> },
                    ].map(({ label, icon: chipIcon }) => (
                      <span key={label} className="inline-flex items-center gap-1 rounded-xl border border-zinc-200/70 bg-white/60 px-2 py-1 text-xs text-zinc-500 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-zinc-400">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{chipIcon}</svg>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pinned Items + Recent Activity */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Pinned Items */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Pinned Items</h2>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">What refuses to drift away.</p>
                </div>
                <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">Manage</a>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { title: 'Jamie musician story idea', status: 'Goblin Spark', statusColor: '#f3bf6a', rowColor: 'var(--ws-violet)', icon: <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5v4h4"/></> },
                  { title: 'Recurring events bug fix', status: 'Haunting Me', statusColor: '#ff9a82', rowColor: 'var(--ws-teal)', icon: <><path d="M7 12h10"/><path d="M8 7.5h8"/><path d="M9 16.5h6"/><path d="M4.5 5.5h15v13h-15z"/></> },
                  { title: 'Take That concert thoughts', status: 'Active', statusColor: '#9d87ff', rowColor: 'var(--ws-amber)', icon: <><path d="M9 18.5V7.5l8-2v8"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="16" r="2"/></> },
                  { title: 'Shropshire app concept', status: 'Research', statusColor: '#b195ff', rowColor: 'var(--ws-green)', icon: <><path d="M12 4.5l4 7-4 8-4-8z"/><path d="M12 10v4"/></> },
                ].map(({ title, status, statusColor, rowColor, icon }) => (
                  <div key={title} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 rounded-[1.125rem] border border-zinc-200/60 bg-zinc-50/60 px-3.5 py-3 dark:border-white/[0.06] dark:bg-white/[0.025]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[0.875rem]" style={{ color: rowColor, background: `color-mix(in srgb, ${rowColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${rowColor} 20%, transparent)` }}>
                      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
                    <span className="text-xs font-[650] whitespace-nowrap" style={{ color: statusColor }}>{status}</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 dark:text-zinc-500">
                      <path d="M14.5 4.5l5 5"/><path d="M13 6l5 5"/><path d="M8 11l5 5"/><path d="M11.5 14.5L5 21"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Recent Activity</h2>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Signals from the past few hours.</p>
                </div>
                <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">View all →</a>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { title: 'Updated "Story Ideas"', sub: 'Added 3 note fragments and one new outline thread.', time: '1h ago', rowColor: 'var(--ws-violet)', icon: <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5v4h4"/></> },
                  { title: 'Completed task in "Life Admin"', sub: 'Booked dentist appointment and archived the reminder.', time: '3h ago', rowColor: 'var(--ws-green)', icon: <><path d="M8 6.5h10.5V18H5.5V6.5H8z"/><path d="M9 12l2 2 4-5"/></> },
                  { title: 'Saved link to "Game Dev"', sub: 'Added HUD inspiration and movement reference notes.', time: '5h ago', rowColor: 'var(--ws-sky)', icon: <><path d="M10 14l4-4"/><path d="M8 16.5H6.5a3.5 3.5 0 1 1 0-7H8"/><path d="M16 7.5h1.5a3.5 3.5 0 1 1 0 7H16"/></> },
                  { title: 'Added note to "Music Notes"', sub: 'New riff in D minor and a stage-lighting idea.', time: 'Yesterday', rowColor: 'var(--ws-amber)', icon: <><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5v4h4"/><path d="M9.5 12h5"/><path d="M9.5 16h5"/></> },
                  { title: 'Captured image', sub: 'Screenshot 2024-05-18 at 14.32.10.png', time: 'Yesterday', rowColor: 'var(--ws-rose)', icon: <><rect x="4.5" y="5.5" width="15" height="13" rx="2.5"/><circle cx="9" cy="10" r="1.4"/><path d="M7 16l3.5-3.5 2.5 2.5 2-2L18 16"/></> },
                ].map(({ title, sub, time, rowColor, icon }) => (
                  <div key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.125rem] border border-zinc-200/60 bg-zinc-50/60 px-3.5 py-3 dark:border-white/[0.06] dark:bg-white/[0.025]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.875rem]" style={{ color: rowColor, background: `color-mix(in srgb, ${rowColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${rowColor} 20%, transparent)` }}>
                      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{sub}</p>
                    </div>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* Tags & Topics */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-4">
              <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Tags &amp; Topics</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Patterns forming in the clutter.</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: '# writing', count: 31, color: '#7ca8ff' },
                { name: '# game-dev', count: 18, color: '#9d87ff' },
                { name: '# music', count: 16, color: '#f0b265' },
                { name: '# ideas', count: 24, color: '#a182ff' },
                { name: '# personal', count: 14, color: '#6aa892' },
                { name: '# bug', count: 7, color: '#d37c78' },
                { name: '# inspiration', count: 22, color: '#77c1bc' },
                { name: '# concert', count: 6, color: '#c28dff' },
              ].map(({ name, count, color }) => (
                <span key={name} className="inline-flex items-center gap-2.5 rounded-[0.875rem] border border-zinc-200/60 bg-zinc-50/60 px-2.5 py-2 text-sm dark:border-white/[0.07] dark:bg-white/[0.03]">
                  <span className="font-semibold" style={{ color: `color-mix(in srgb, ${color} 78%, white 22%)` }}>{name}</span>
                  <span className="inline-grid h-6 min-w-[1.5rem] place-items-center rounded-full px-1.5 text-xs font-bold" style={{ background: `color-mix(in srgb, ${color} 16%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 22%, transparent)`, color }}>
                    {count}
                  </span>
                </span>
              ))}
            </div>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-[560] text-[var(--ws-accent-strong)] hover:opacity-80">
              View all tags →
            </a>
          </div>

          {/* System & Theme */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-4">
              <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">System &amp; Theme</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Quiet controls for a private little universe.</p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: 'Dark Mode',
                  sub: 'Calm by default, with a softer light mode if you want it.',
                  rowColor: 'var(--ws-muted)',
                  trailing: <button aria-label="Toggle dark mode" className="relative h-[30px] w-[52px] shrink-0 rounded-full border border-[var(--ws-accent)]/30 transition" style={{ background: 'linear-gradient(90deg, rgba(100,188,155,0.55), rgba(122,204,176,0.85))' }}>
                    <span className="absolute top-[3px] left-[3px] h-[22px] w-[22px] translate-x-[22px] rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform" />
                  </button>,
                  icon: <path d="M18 14.5A6.5 6.5 0 1 1 9.5 6 5.5 5.5 0 0 0 18 14.5z"/>
                },
                {
                  label: 'Local Backup',
                  sub: 'Last backup: Today, 18:42',
                  rowColor: 'var(--ws-teal)',
                  trailing: <span className="text-sm font-[560] text-[var(--ws-accent-strong)] whitespace-nowrap">Up to date</span>,
                  icon: <><path d="M6.5 9.5V6.8A2.8 2.8 0 0 1 9.3 4h5.4a2.8 2.8 0 0 1 2.8 2.8v2.7"/><rect x="4.5" y="9.5" width="15" height="10" rx="2"/><path d="M12 13.5v2.5"/></>
                },
                {
                  label: 'Export / Import',
                  sub: 'Your data, always yours.',
                  rowColor: 'var(--ws-amber)',
                  trailing: <span className="text-sm font-[560] text-[var(--ws-accent-strong)] whitespace-nowrap">Manage</span>,
                  icon: <><path d="M12 3.5v11"/><path d="M8 10.5l4 4 4-4"/><path d="M5 18.5h14"/></>
                },
                {
                  label: '100% Local',
                  sub: 'No cloud sync. No tracking. Just your machine and your mind.',
                  rowColor: 'var(--ws-green)',
                  trailing: <span className="inline-flex items-center justify-center rounded-full border border-zinc-200/60 bg-zinc-50/60 px-2.5 py-1 text-xs font-[650] dark:border-white/[0.07] dark:bg-white/[0.04]" style={{ color: '#7dd38f' }}>Private</span>,
                  icon: <><path d="M6.5 10V7.8A3.8 3.8 0 0 1 10.3 4h3.4a3.8 3.8 0 0 1 3.8 3.8V10"/><rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M12 13v3"/></>
                },
              ].map(({ label, sub, rowColor, trailing, icon }) => (
                <div key={label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.125rem] border border-zinc-200/60 bg-zinc-50/60 px-3.5 py-3 dark:border-white/[0.06] dark:bg-white/[0.025]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.875rem]" style={{ color: rowColor, background: `color-mix(in srgb, ${rowColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${rowColor} 20%, transparent)` }}>
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{label}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">{sub}</p>
                  </div>
                  {trailing}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">No cloud. No tracking. Just you and your ideas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
