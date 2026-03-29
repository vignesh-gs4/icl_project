import React, { useState, useRef } from 'react'
import asserts from "../../assets/asset"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import toast from "react-hot-toast";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [syllabus, setSyllabus] = useState([""]);
  const [courseImage, setCourseImage] = useState(null);
  const privateApi = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const productData = { courseName, description, fees, syllabus };
      const formData = new FormData();
      formData.append("productData", JSON.stringify(productData));
      formData.append("courseImage", courseImage);

      const { data } = await privateApi.post("/courses/add-course", formData);

      if (data.success) {
        setCourseName("");
        setDescription("");
        setFees("");
        setCourseImage(null)
        setSyllabus([""])
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something wrong");
      console.log("error while adding course data : ", err.message);
      setIsLoading(false);
    }
  }

  const handleRemoveTopic = (index) => {
    const updatedSyllabus = syllabus.filter((_, i) => i !== index);
    setSyllabus(updatedSyllabus);
  };

  return (
    <div className='md:max-w-10xl max-w-5xl p-4 md:p-8 bg-gray-50 min-h-screen'>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        {/* Form Header */}
        <div className="bg-primary p-6 text-white">
          <h2 className="text-xl font-bold">Add New Course</h2>
          <p className="text-gray-300">Enter the details to list a new course on the platform.</p>
        </div>

        <div className="p-6 space-y-8">

          {/* Top Section: Inputs + Image */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  value={courseName}
                  placeholder='e.g. Advanced React Architecture'
                  onChange={e => setCourseName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Course Fees</label>
                <input
                  type="number"
                  required
                  value={fees}
                  placeholder="0.00"
                  onChange={e => setFees(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Image Upload Area */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Thumbnail Image</label>
              <label className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition-colors overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setCourseImage(e.target.files[0])}
                />

                {courseImage ? (
                  <img
                    src={URL.createObjectURL(courseImage)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <img src={asserts.upload_area} alt="upload" className="w-10 mb-2 opacity-50" />
                    <p className="text-sm">Click to upload image</p>
                    <p className="text-xs uppercase font-bold tracking-wider">JPG, PNG</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Course Description</label>
            <textarea
              value={description}
              required
              onChange={e => setDescription(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all'
              rows={4}
              placeholder="Provide a detailed summary of what students will achieve..."
            ></textarea>
          </div>

          {/* Syllabus Section */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-700">Course Syllabus</h3>
              <button
                onClick={() => setSyllabus(prev => [...prev, ""])}
                className='text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors'
                type="button"
              >
                + ADD NEW TOPIC
              </button>
            </div>

            <div className="grid gap-3">
              {syllabus.map((topicsInput, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-gray-400 text-xs font-bold w-4">{index + 1}.</span>
                  <input
                    type="text"
                    value={topicsInput}
                    placeholder='Topic title...'
                    onChange={(e) => setSyllabus(prev => {
                      const newArr = [...prev];
                      newArr[index] = e.target.value;
                      return newArr;
                    })}
                    className='flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none transition-all bg-white/50'
                  />
                  {syllabus.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTopic(index)}
                      className="text-gray-400 hover:text-red-500 text-xl px-2"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              disabled={isLoading}
              className={`
    flex items-center justify-center px-10 py-3 font-bold rounded-lg shadow-lg transition-all 
    ${isLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-80"
                  : "bg-primary hover:bg-primary/90 text-white hover:shadow-primary/20 active:scale-95"
                }
  `}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                "Submit Course"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCourse