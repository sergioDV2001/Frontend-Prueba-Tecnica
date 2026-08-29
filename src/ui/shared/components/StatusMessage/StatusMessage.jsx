const COLOR_MESSAGES = {
  default: 'text-slate-500',
  error: 'text-red-500',
}

export function StatusMessage({ tone = 'default', children }) {
  return (
    <p className={`py-12 text-center ${COLOR_MESSAGES[tone]}`}>{children}</p>
  )
}
