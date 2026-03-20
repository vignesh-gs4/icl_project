import React from 'react'
import CourseDetailComp from '../components/course_components/CourseDetailComp';

const CourseDetail = () => {
    return (
        <section className="py-10 bg-gray-200">
            <div className='flex lg:mx-24 m-4 p-4 bg-white lg:px-24 flex-wrap gap-10 justify-center items-end'>
                <div className='flex-1 min-w-[300px]'>
                    <div className='bg-gray-300 text-white h-48 rounded-lg flex items-center justify-center'>
                        Course Image
                    </div>
                </div>

                <div 
                className='flex-1 min-w-[300px] flex flex-col
                justify-between gap-5 h-full'>
                    <h2 className='text-2xl font-bold'>Course Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex justify-between'>
                        <p>Duration: 60days</p>
                        <p>Price: 100</p>
                    </div>
                    <button className='bg-blue-500 text-white py-2 rounded'>Start course</button>
                </div>

            </div>
            <section>
                <CourseDetailComp />
            </section>
        </section>
    )
}

export default CourseDetail;