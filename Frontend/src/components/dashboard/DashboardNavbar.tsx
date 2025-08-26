import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function DashboardNavbar() {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const userName = (typeof window !== 'undefined' && localStorage.getItem('portafyUserName')) || 'User';
  const avatarUrl = (typeof window !== 'undefined' && localStorage.getItem('portafyAvatar')) || '';

  useEffect(() => {
    document.body.style.overflow = sidebar ? 'hidden' : '';
  }, [sidebar]);

  const baseLink = "px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition";
  const active = ({ isActive }: { isActive: boolean }) =>
    `${baseLink} ${isActive ? "text-[#6C63FF]" : "text-[#111827]"}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-[#111827]">
            Portafy
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <NavLink to="/dashboard" className={active}>Dashboard</NavLink>
          <NavLink to="/templates" className={active}>Templates</NavLink>
          <NavLink to="/site" className={active}>Live</NavLink>
          <NavLink to="/portfolios" className={active}>Portfolios</NavLink>
          <NavLink to="/manual" className={active}>Form</NavLink>
        </div>

        {/* Right: Avatar + Mobile menu */}
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => setSidebar(true)} className="inline-flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100">
            {avatarUrl ? (
              <img src={avatarUrl} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-[#6C63FF] text-white flex items-center justify-center text-sm font-bold">
                {userName?.[0]?.toUpperCase()}
              </div>
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            <NavLink to="/dashboard" className={active} onClick={() => setOpen(false)}>Dashboard</NavLink>
            <NavLink to="/templates" className={active} onClick={() => setOpen(false)}>Templates</NavLink>
            <NavLink to="/site" className={active} onClick={() => setOpen(false)}>Live</NavLink>
            <NavLink to="/portfolios" className={active} onClick={() => setOpen(false)}>Portfolios</NavLink>
            <NavLink to="/manual" className={active} onClick={() => setOpen(false)}>Form</NavLink>
          </div>
        </div>
      ) : null}

      {/* Right Sidebar Drawer (profile/settings) */}
      <div className={`${sidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 z-50 transition`}>
        <div className={`fixed inset-y-0 right-0 w-72 bg-white border-l border-gray-100 shadow-xl transform transition ${sidebar ? 'translate-x-0' : 'translate-x-full'} z-50`}>
          <div className="p-4 flex items-center gap-3 border-b">
            {avatarUrl ? (
              <img src={avatarUrl} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-bold">
                {userName?.[0]?.toUpperCase()}
              </div>
            )}
            <div>
              <div className="font-semibold text-[#111827]">{userName}</div>
              <div className="text-xs text-gray-500">Account menu</div>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-1">
            <NavLink to="/profile" className={active} onClick={() => setSidebar(false)}>Profile</NavLink>
            <NavLink to="/settings" className={active} onClick={() => setSidebar(false)}>Settings</NavLink>
            <NavLink to="/faq" className={active} onClick={() => setSidebar(false)}>FAQ</NavLink>
            <button className="mt-2 px-3 py-2 text-left text-sm rounded-lg border hover:bg-gray-50">Logout</button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40" onClick={() => setSidebar(false)} />
      </div>
    </header>
  );
}


