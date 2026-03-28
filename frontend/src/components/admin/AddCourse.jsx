import React, { useState, useRef, useEffect } from 'react'
import asserts from "../../assets/asset"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import toast from "react-hot-toast";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [syllabusInputs, setSyllabusInputs] = useState([""]);
  const [courseImage, setCourseImage] = useState(null);
  const descriptionRef = useRef(null);
  const privateApi = useAxiosPrivate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const productData = {
        courseName,
        description,
        fees,
        syllabusInputs
      };

      const formData = new FormData();

      formData.append("productData", JSON.stringify(productData));
      formData.append("courseImage", courseImage);

      const { data } = await privateApi.post("/courses/add-course", formData);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

    } catch (err) {
      toast.error("Something wrong")
      console.log("error while adding course data : ", err.message);
    }
  }

  // const handleTopicInput = () => {}

  useEffect(() => {

  }, []);

  console.log("component re-rendering");

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 m-4 md:gap-5 gap-2">
          <div className=''>
            <input
              type="text"
              value={courseName}
              placeholder='Course Name'
              onChange={e => setCourseName(e.target.value)}
              className='shadow-lg p-2 text-center border border-gray-300
            focus:outline focus:outline-blue-500 rounded-lg'
            />
            <input
              type="number"
              value={fees}
              placeholder="Course Fees"
              onChange={e => setFees(e.target.value)}
              className="shadow-lg p-2 text-center border border-gray-300
            focus:outline focus:outline-blue-500 rounded-lg"
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-2'>
            <div className='border border-gray-300 inline border border-gray-300
          rounded-lg text-gray-500 p-2'>
              <label htmlFor="course-image text-gray-600">Add Course Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => setCourseImage(e.target.files[0])}
              />
              <img
                className="max-w-24 cursor-pointer"
                src={courseImage
                  ? URL.createObjectURL(courseImage)
                  : asserts.upload_area}
                alt="upload area"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className='col-span-2'>
            <textarea
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='shadow-lg p-2 border border-gray-300
            focus:outline focus:outline-blue-500 rounded-lg'
              ref={descriptionRef}
              cols={60}
              rows={5}
            ></textarea>
          </div>
          <div className='flex items-end'>
            <div className='flex flex-col gap-5 items-start'>
              {
                syllabusInputs.map((topicsInput, index) => {
                  console.log(index);

                  return (
                    <input
                      key={index}
                      type="text"
                      value={topicsInput}
                      placeholder='Enter Topic Name'
                      onChange={(e) => setSyllabusInputs(prev => {
                        const newArr = [...prev];
                        newArr[index] = e.target.value
                        return newArr;
                      })}
                      className='shadow-lg p-2 text-center border border-gray-300
                    focus:outline focus:outline-blue-500 rounded-lg'
                    />
                  )
                })
              }
            </div>
            <button
              onClick={() => {
                setSyllabusInputs(prev => [...prev, ""])
              }} className='bg-primary p-2 text-white rounded-lg'
              type="button"
            >
              + Add Topics
            </button>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddCourse