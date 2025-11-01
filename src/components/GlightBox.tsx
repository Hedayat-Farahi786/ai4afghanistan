'use client'
import glightbox from 'glightbox'
import {ReactNode, useEffect} from 'react'

import 'glightbox/dist/css/glightbox.min.css'

type PropsType = {
    children: ReactNode
}

const GlightBox = ({children}: PropsType) => {

    useEffect(() => {
        const instance = glightbox({
            openEffect: 'fade',
            closeEffect: 'fade',
        })

        return () => instance.destroy()
    }, [])

    return (
        <>
            {children}
        </>
    )
}
export default GlightBox
