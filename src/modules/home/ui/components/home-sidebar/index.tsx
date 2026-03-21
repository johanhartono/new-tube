import { SidebarContent } from '@/components/ui/sidebar'
import { Sidebar } from '@/components/ui/sidebar'
import React from 'react'
import { MainSection } from '@/modules/home/ui/components/home-sidebar/main-section'
import { PersonalSection } from '@/modules/home/ui/components/home-sidebar/personal-section'
import { Separator } from '@/components/ui/separator'

const HomeSidebar = () => {
    return (
      
        <Sidebar className='pt-16 z-40 border-none' collapsible='icon'>
            <SidebarContent className='bg-background' >
                <MainSection />
                <Separator />
                <PersonalSection/>
            </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar