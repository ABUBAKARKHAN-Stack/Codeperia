"use client"

import React, { FC, ReactNode } from 'react'
import { Button } from './button'
import { useScroll } from '@/hooks/useScroll';

type Props = {
    sectionId: string;
    children: ReactNode
}

const ScrollToSectionBtn: FC<Props> = ({
    sectionId,
    children
}) => {
    const { scrollToSection } = useScroll();

    return (
        <Button
            size={"lg"}
            onClick={() => scrollToSection(`#${sectionId}`)}
            className="font-orbitron bg-primary/10 rounded-full !p-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25"
        >
            {children}
        </Button>
    )
}

export default ScrollToSectionBtn