import React from 'react'

const Herosection = () => {
  return (
    <div>
     <section class="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg shadow-lg py-16 px-10 mb-8 flex flex-col items-center text-center">
            <h1 class="text-3xl font-bold mb-4">Speak Easy, Understand All</h1>
            <p class="text-lg mb-8">Instantly translate using your voice.  Breaking down language barriers in Kenya.</p>
            <div class="flex items-center justify-center w-full">
                <button id="voice-translate-btn" class="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out shadow-md flex items-center">
                    <span class="mr-3">Voice Translate</span>
                    <div class="voice-icon"></div>  </button>
            </div>
        </section>

    </div>
  )
}

export default Herosection
