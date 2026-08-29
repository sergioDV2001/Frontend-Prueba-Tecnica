export function OptionSelector({ label, options, value, onChange }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-800">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = option.code === value

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => onChange(option.code)}
              aria-pressed={isSelected}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {option.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
