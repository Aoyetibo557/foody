import React from 'react'
import PageLayout from '@/components/Layout/layout'
import { HomeBanner } from '@/components/_home/_banner/banner'
import { HomeBody } from '@/components/_home/homebody'
import Image from 'next/image'

const Homepage = () => {

    return (
        <div className={`flex flex-col items-center  gap-10 p-16`}>
            <HomeBanner />
            <div className={`mt-10 flex justify-center p-4`}>
                <HomeBody />
            </div>
        </div>
    )
}

Homepage.getLayout = (page) => {
    return <PageLayout>{page}</PageLayout>;
}


export default Homepage