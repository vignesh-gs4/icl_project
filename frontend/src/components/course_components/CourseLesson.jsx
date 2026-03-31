import React from 'react'

const CourseLesson = ({ lessons }) => {

  return (
    <section className='px-4 lg:px-24 my-10'>
      <h2 className='font-bold text-gray-500'>COURSE SYLLABUS</h2>
      <div className='flex gap-5 items-center flex-wrap'>
        <div className='lesson-outlines min-w-[350px] flex-1'>
         {lessons.map((lesson, index) => (
          <h1 key={index}>{lesson}</h1>
         ))}
        </div>
        <div className='flex-1 min-w-[350px]'>
          <h1>instructor</h1>
          <div>
            <h2>image</h2>
            <p>name</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae iure vero minima dolore cupiditate obcaecati consequatur quae magnam repellendus id quod libero aperiam nesciunt consectetur deleniti, neque voluptatibus amet!
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseLesson