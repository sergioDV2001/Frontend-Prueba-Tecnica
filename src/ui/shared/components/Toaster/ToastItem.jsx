import { useEffect } from 'react'
import { CheckIcon, AlertIcon } from '../../icons'
import { useToastStore } from './toastStore'
import { TOAST_DURATION } from './toastConfig'

const VARIANTS = {
  success: { Icon: CheckIcon, iconColor: 'text-green-400', role: 'status' },
  error: { Icon: AlertIcon, iconColor: 'text-red-400', role: 'alert' },
}

export function ToastItem({ id, message, variant = 'success' }) {
  const removeToast = useToastStore((state) => state.removeToast)
  const { Icon, iconColor, role } = VARIANTS[variant] ?? VARIANTS.success

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), TOAST_DURATION)
    return () => clearTimeout(timer)
  }, [id, removeToast])

  return (
    <div
      role={role}
      className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg [animation:toast-in_0.2s_ease-out]"
    >
      <Icon className={`h-5 w-5 ${iconColor}`} />
      {message}
    </div>
  )
}
