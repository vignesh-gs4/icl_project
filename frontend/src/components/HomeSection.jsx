import React from 'react'

const HomeSection = () => {
    return (
        <section>
            <div className='flex gap-10 p-8 md:flex-row flex-col'>
                <div className='flex-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum delectus voluptatibus culpa possimus labore consequatur vero enim eius cumque perspiciatis molestias voluptates exercitationem, inventore debitis, dolorem vitae mollitia, totam dicta placeat maxime laudantium. Iure tempora doloremque rem corporis, consequuntur sapiente. Provident corporis pariatur culpa iste possimus ipsa quod! Non reiciendis officia consequuntur atque iusto beatae veniam dolorum reprehenderit et, quaerat tempora doloribus. Aliquid quod sunt nemo, aliquam consectetur aut? Iusto voluptatibus dolorem excepturi fugiat nulla quia repellendus inventore repudiandae optio voluptatum enim asperiores necessitatibus incidunt sunt in officiis dignissimos cum, esse tempore sint cumque blanditiis ab. Est, corporis recusandae!
                </div>
                <div className='flex-1'>
                    <form>
                        <div className='flex flex-col gap-5 border border-gray-300 p-4'>
                            <h2 className='text-center text-lg font-bold text-gray-500'>Enquiry Form</h2>
                            <input className='input' type="text" placeholder='Your Name' />
                            <input className='input' type="email" placeholder='Your Email Address' />
                            <input className='input' type="tel" placeholder='Mobile Number' />
                            <div className='flex gap-4 items-center flex-wrap'>
                                <label htmlFor='course'
                                    className='p-2 bg-blue-500 text-white'
                                >Interested Course</label>
                                <select id='course' className='input'>
                                    <option value="c">C Programming Language</option>
                                    <option value="c_plus_plus">C++ Programming Language</option>
                                    <option value="javascript">JavaScript</option>
                                </select>
                                <button className="p-2 bg-blue-500 text-white">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HomeSection