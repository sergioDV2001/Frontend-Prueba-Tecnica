import { useEffect } from 'react'
import { CheckIcon } from '../../icons'
import { useToastStore } from './toastStore'
import { TOAST_DURATION } from './toastConfig'

export function ToastItem({ id, message }) {
  const removeToast = useToastStore((state) => state.removeToast)

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), TOAST_DURATION)
    return () => clearTimeout(timer)
  }, [id, removeToast])

  return (
    <div
      role="status"
      className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg [animation:toast-in_0.2s_ease-out]"
    >
      <CheckIcon className="h-5 w-5 text-green-400" />
      {message}
    </div>
  )
}
