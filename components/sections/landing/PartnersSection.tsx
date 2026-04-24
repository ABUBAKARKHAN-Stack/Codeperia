// "use client"
// import { ContainerLayout } from '@/components/layout'
// import { itemVariants, ParallaxSection, SectionHeader, StaggerChildren } from '@/components/shared'
// import { partners } from '@/data/landing.data'
// import { motion } from 'motion/react'

// const PartnersSection = () => {
//   return (
//     <ParallaxSection speed={0.1}>
//         <section className="py-20 border-y border-border/50">
//           <ContainerLayout>

//             <SectionHeader
//               eyebrow="Trusted Partners"
//               title="Collaborating with ambitious brands"
//               centered
//             />
//             <StaggerChildren className="flex flex-wrap justify-center items-center gap-12 md:gap-20" staggerDelay={0.06}>
//               {partners.map((partner) => (
//                 <motion.span
//                   key={partner}
//                   variants={itemVariants}
//                   className="text-xl md:text-2xl font-semibold text-muted-foreground/20 hover:text-accent/60 transition-colors font-inter duration-500 cursor-default"
//                 >
//                   {partner}
//                 </motion.span>
//               ))}
//             </StaggerChildren>
//           </ContainerLayout>
//         </section>
//       </ParallaxSection>
//   )
// }

// export default PartnersSection
