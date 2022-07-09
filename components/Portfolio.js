import React from 'react'
import ProjectCard from './ProjectCard'

export default function Portfolio() {
  return (
    <div className='pt-[173px] md:pt-[100px] text-white px-6 md:px-16'>
      <h2 className='text-center text-[20px] pb-[10px]'>Portfolio</h2>
      <h1 className='text-center font-semibold text-[40px] pb-12 md:pb-[72px]'>
        Projects
      </h1>
      <div className='space-y-[172px] md:space-y-[160px]'>
        <ProjectCard
          title='Google Clone'
          desc='Et sit velit erat lorem purus. Consequat arcu, at sagittis pellentesque urna. Malesuada vitae fermentum, facilisis duis sagittis sodales pharetra.'
          tag='Tailwind Css,ReactJs,Redux'
          gitLink='https://github.com/AkshayBenny.com'
          liveLink='https://google.com'
          image='https://images.unsplash.com/photo-1586125674857-4eb86880905d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          order={1}
        />
        <ProjectCard
          title='Google Clone'
          desc='Et sit velit erat lorem purus. Consequat arcu, at sagittis pellentesque urna. Malesuada vitae fermentum, facilisis duis sagittis sodales pharetra.'
          tag='Tailwind Css,ReactJs,Redux'
          gitLink='https://github.com/AkshayBenny.com'
          liveLink='https://google.com'
          image='https://images.unsplash.com/photo-1586125674857-4eb86880905d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          order={2}
        />
      </div>
    </div>
  )
}
