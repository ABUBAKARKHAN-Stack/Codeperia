import { OurWorkCards } from '@/components/cards'
import { ContainerLayout } from '@/components/layout'
import { SectionHeader } from '@/components/reusable'
import React from 'react'

const Portfolio = () => {
    return (
        <section id='portfolio-section' className="py-16">
            <ContainerLayout>
                <SectionHeader mainHeading="Our Featured Work" />

                <div className="mt-10 gap-6 grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-y-4">
                    <OurWorkCards showAll />
                </div>
            </ContainerLayout>
        </section>
    )
}


export default Portfolio