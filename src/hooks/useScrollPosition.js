import { useEffect, useState } from 'react'

const useScrollPosition = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0)

    useEffect(()=> {
        const updatePosition = ()=> {
            setScrollPosition(window.pageYOffset + 1)
        }
        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return ()=> window.removeEventListener('scroll', updatePosition)
    }, [])

  return scrollPosition
}

export default useScrollPosition