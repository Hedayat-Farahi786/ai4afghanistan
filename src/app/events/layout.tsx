import HomeFooter from '@/components/layouts/Footer/HomeFooter'
import TopBanner from '@/components/layouts/TopBanner'
import Header from '@/app/(single)/home/components/Header'
import React from 'react'
import {ChildrenType} from '@/types/component-props'
import CtaArea from '@/components/layouts/CtaArea'

const layout = ({children}: ChildrenType) => {
    return (
        <>
            <Header/>
            {children}
            <CtaArea/>
            <HomeFooter/>
        </>
    )
}

export default layout