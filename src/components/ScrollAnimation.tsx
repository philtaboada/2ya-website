'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'fadeInRight' | 'scaleIn' | 'slideInLeft'
  delay?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentElement = elementRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay])

  const animationClasses = {
    fadeInUp: isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8',
    fadeInRight: isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8',
    scaleIn: isVisible ? 'animate-scale-in' : 'opacity-0 scale-90',
    slideInLeft: isVisible ? 'animate-fade-in-up' : 'opacity-0 -translate-x-8'
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}
