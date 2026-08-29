import { useEffect, useRef, useState } from 'react'

export function useInfiniteScroll(items, pageSize = 12) {
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const [trackedItems, setTrackedItems] = useState(items)
  const sentinelRef = useRef(null)

  if (items !== trackedItems) {
    setTrackedItems(items)
    setVisibleCount(pageSize)
  }

  const hasMore = visibleCount < items.length

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) {
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((current) => current + pageSize)
      }
    })

    observer.observe(sentinel)

    return () => observer.disconnect()
  }, [hasMore, pageSize, visibleCount])

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore,
    sentinelRef,
  }
}
