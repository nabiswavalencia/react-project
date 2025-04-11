import React from 'react'

const Keyfeatures = () => {
  return (
    <div>
       <section class="bg-white rounded-lg shadow-md py-10 px-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="service-card bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
                    <h3 class="text-xl font-semibold text-teal-500 mb-4">Image Translation</h3>
                    <p class="text-gray-700 mb-4">Upload an image and get the text translated.</p>
                </div>
                <div class="service-card bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
                    <h3 class="text-xl font-semibold text-teal-500 mb-4">Wide Language Support</h3>
                    <p class="text-gray-700 mb-4">Translate to and from many Kenyan languages.</p>
                </div>
                <div class="service-card bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
                    <h3 class="text-xl font-semibold text-teal-500 mb-4">User-Friendly Interface</h3>
                    <p class="text-gray-700 mb-4">Simple and intuitive design for all users.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Keyfeatures
