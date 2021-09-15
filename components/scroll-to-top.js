import ButtonToTop from './assets/button-to-top'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useRef } from 'react'

export default function ScrollToTop ({ showButtonAt }) {
  const chivatoRef = useRef()
  const [isIntersecting] = useIntersectionObserver({ elementRef: chivatoRef })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div ref={chivatoRef} />
      <ButtonToTop
        height={45}
        onClick={handleClick}
        show={!isIntersecting}
        width={45}
      />
      <style jsx>{`
        div {
          height: 1px;
          left: 1px;
          opacity: 0;
          position: absolute;
          top: ${showButtonAt}px;
          width: 1px;
        }
      `}
      </style>
    </>
  )
}