export const NewChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
  </svg>
);
export const ThumbUp = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 22V11l5-9a3 3 0 0 1 3 3v4h5a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.6 22H7zM2 11h5v11H2z" />
  </svg>
);
export const ThumbDown = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M17 2v11l-5 9a3 3 0 0 1-3-3v-4H4a2 2 0 0 1-2-2.3l1.4-8A2 2 0 0 1 5.4 2H17zM22 2h-5v11h5z" />
  </svg>
);
export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);
export const ThemeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 8.7V4h-4.7L12 .7 8.7 4H4v4.7L.7 12 4 15.3V20h4.7l3.3 3.3 3.3-3.3H20v-4.7l3.3-3.3L20 8.7zM12 18V6a6 6 0 0 1 0 12z" />
  </svg>
);
export const CommentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
);
export const BotAvatar = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <line x1="24" y1="4" x2="24" y2="11" stroke="#6f8fbf" strokeWidth="2" />
    <circle cx="24" cy="4" r="2.5" fill="#6f8fbf" />
    <rect x="8" y="11" width="32" height="26" rx="9" fill="#e8f0fb" stroke="#6f8fbf" strokeWidth="2" />
    <circle cx="18" cy="23" r="4" fill="#fff" stroke="#6f8fbf" strokeWidth="2" />
    <circle cx="30" cy="23" r="4" fill="#fff" stroke="#6f8fbf" strokeWidth="2" />
    <circle cx="18" cy="23" r="1.6" fill="#4a6fa5" />
    <circle cx="30" cy="23" r="1.6" fill="#4a6fa5" />
    <path d="M17 31q7 4 14 0" stroke="#6f8fbf" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
export const UserAvatar = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#0b78bd" />
    <path d="M14 26c0-9 4-14 10-14s10 5 10 14l-3 6H17z" fill="#1c1c24" />
    <ellipse cx="24" cy="26" rx="7" ry="8.5" fill="#f3d3b5" />
    <path d="M16 22c2-6 12-6 16 0-3-2-12-2-16 0z" fill="#1c1c24" />
    <path d="M10 48c1-9 7-12 14-12s13 3 14 12z" fill="#1c1c24" />
  </svg>
);
export const LogoIcon = () => (
  <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
    <rect width="48" height="48" rx="10" fill="#d9f0ff" />
    <path d="M8 12h24a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H20l-7 6v-6H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z" fill="#3bb273" />
    <circle cx="13" cy="21" r="2" fill="#fff" /><circle cx="20" cy="21" r="2" fill="#fff" /><circle cx="27" cy="21" r="2" fill="#fff" />
    <path d="M28 22h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2v5l-6-5h-6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" fill="#2f80ed" opacity=".85" />
  </svg>
);
