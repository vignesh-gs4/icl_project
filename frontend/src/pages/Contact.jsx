import React from 'react'

const Contact = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE (TEXT + INFO) */}
                <div>
                    <p className="text-indigo-600 font-semibold mb-2">Contact Us</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Let's build something amazing together
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Have a question, idea, or project in mind? Fill out the form and our team will reach out to you shortly.
                    </p>

                    {/* Info Cards */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl">📍</div>
                            <div>
                                <p className="font-semibold text-gray-700">Location</p>
                                <p className="text-gray-500 text-sm">Chennai, India</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl">📞</div>
                            <div>
                                <p className="font-semibold text-gray-700">Phone</p>
                                <p className="text-gray-500 text-sm">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl">📧</div>
                            <div>
                                <p className="font-semibold text-gray-700">Email</p>
                                <p className="text-gray-500 text-sm">support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (FORM) */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                    <form className="flex flex-col gap-6">

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                required
                            />
                        </div>

                        <textarea
                            placeholder="Write your message..."
                            className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition active:scale-95"
                        >
                            Send Message 🚀
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact