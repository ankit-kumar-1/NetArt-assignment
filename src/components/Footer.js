import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <div className=' text-center mt-4 font-bold  border-t-4 border-red-500 px-1 mx-5'>
                <p className=' mt-4'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            </div>
            <div className=' flex justify-center items-center flex-wrap mx-4 mt-4'>
                <span className=' px-1'>CHEMICALS & PROCESS</span> <span className=' border-l border-red-500 px-1 '>POWER </span> <span className=' border-l border-red-500 px-1'>WATER & WASTE</span> <span className=' border-l border-red-500 px-1'>OILS & GAS</span> <span className=' border-l border-red-500 px-1'>PHARMA</span> <span className=' border-l border-red-500 px-1'>SUGARS & DISTILLERIES</span> <span className=' border-l border-red-500 px-1'>PAPER & PULP</span><span className=' border-l border-red-500 px-1'>MARINE & DEFENCE</span><span className=' border-l border-red-500 px-1'>METAL & MINING</span><span className=' border-l border-red-500 px-1'>FOOD & BEVERAGE</span><span className=' border-l border-red-500 px-1'>PETROCHEMICAL & REFINERIES</span><span className=' border-l border-red-500 px-1'>SOLAR</span> <span className=' border-l border-red-500 px-1'>BUILDING</span> <span className=' border-l border-red-500 px-1'>HVAC</span>
                <span className=' border-l border-red-500 px-1'>FIRE FIGHTING</span> <span className=' border-l border-red-500 px-1'>  AGRICULTURE & RESIDENTIAL</span>
            </div>

            <div className="bg-red-500 text-white p-4 md:p-6 flex flex-col md:flex-row justify-center items-center gap-20 mt-5 ">
                <div className="flex items-center">
                    <FaPhoneAlt className="w-8 h-8 border rounded-full text-red-500 bg-white p-1 pr-1" />
                    <span className="ml-2">Toll free 1800 200 1234</span>
                </div>
                <div className="flex items-center">
                    <FaFacebook className="w-8 h-8 pr-1" />
                    <a
                        href="https://www.facebook.com/cripumps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        www.facebook.com/cripumps
                    </a>
                </div>
                <div className="flex items-center">
                    <BsGlobe2 className="w-8 h-8 pr-1" />
                    <a
                        href="https://www.crigroups.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        www.crigroups.com
                    </a>
                </div>
            </div>
        </div>
    )
}
