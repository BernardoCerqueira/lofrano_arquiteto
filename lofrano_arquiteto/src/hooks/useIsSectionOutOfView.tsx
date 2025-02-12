import { useEffect, useState } from "react";

const useIsSectionOutOfView = (sectionId: string) => {
  const [isOutOfView, setIsOutOfView] = useState(false)

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfView(!entry.isIntersecting)
      },
      { root: null, threshold: 0 }
    )

    observer.observe(section)

    return () => {
      observer.unobserve(section)
    }
  }, [sectionId])

  return isOutOfView
}

export default useIsSectionOutOfView