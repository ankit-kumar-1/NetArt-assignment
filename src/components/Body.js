import React from 'react'
import img1 from '../asserts/1.png'
import img2 from '../asserts/2.png'
import img3 from '../asserts/3.png'

export default function Body() {
    return (
        <div>
            <div className="flex flex-col md:flex-row mx-4 md:mx-16 mt-10">
                <div className=''>
                    <img src={img1} alt="Award Ceremony" className=' w-3/4 pl-8' />
                </div>
                <div>
                    <div>
                        <h3 className=' font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                    </div>
                    <div>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        <img src={img2} alt="" />
                        <p>Government of India has awarded the <span className=' font-bold'> "National Energy Conservation Award 2018"</span> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>

                </div>
            </div>

            <div className="mt-10">
                <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
                <div className="px-20 my-10">
                    <img src={img3} alt="Pumpsets" className="w-full" />
                </div>
                <p className="text-center mb-4">
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </p>
            </div>

        </div>
    )
}
