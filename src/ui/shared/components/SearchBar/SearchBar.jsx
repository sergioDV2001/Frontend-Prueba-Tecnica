import { SearchIcon } from '../../icons'

export function SearchBar({
  value,
  onChange,
  placeholder = 'Buscar...',
  className = '',
}) {
  return (
    <div className={`relative max-w-xl ${className}`}>
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
    </div>
  )
}
