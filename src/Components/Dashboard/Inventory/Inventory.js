import React from 'react';
import bottomarrow from "../../../asstes/Icon/bottom-arrow.svg"
import doublearrow from "../../../asstes/Icon/duble-arrow.svg"
import successdot from "../../../asstes/Icon/Ellipse 20.svg"
import progressdot from "../../../asstes/Icon/Ellipse 2.svg"
import outofspacedot from "../../../asstes/Icon/Ellipse 10.svg"
const Inventory = () => {
    return (
        <>
            <div className="mx-5">
                <div className="relative  shadow-md sm:rounded-lg">
                    <div className="p-4">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500  " fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 border-gray-600 placeholder-gray-400 " placeholder="Search for items" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left font-medium text-tableText ">
                        <thead className="text-xs bg-tableHead">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="hidden md:block px-6 py-3">
                                    Date Updated <img src={bottomarrow} className="inline" alt="" />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title <img src={doublearrow} className="inline" alt="" />
                                </th>
                                <th scope="col" className="px-6 py-4 hidden xl:block ">
                                    Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className='hidden md:block'>Status</span>
                                    <span className='block md:hidden text-tableHead'>f</span>
                                </th>
                                <th scope="col" className="text-right px-6 py-3">
                                    <span className='hidden xl:block'> Quantity</span>
                                </th>
                                <th scope="col" className="text-right hidden xl:block px-6 py-3">
                                    Unit Price
                                </th>
                                <th scope="col" className="text-right px-6 py-3">
                                    Amount <img src={doublearrow} className="inline" alt="" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 " />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4 whitespace-nowrap">
                                    11 Nov 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a hammer to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    200/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4    whitespace-nowrap">
                                    10 Nov 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a Screw to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img className='' src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    122/230
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $1220.00
                                </td>

                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 " />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4     whitespace-nowrap">
                                    6 Nov 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    Wood plan will be used to do woodworks, duh
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>In Progress &nbsp;</p> <img src={progressdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    100/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $1.5
                                </td>
                                <td className="text-right px-6 py-4">
                                    $150.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4     whitespace-nowrap">
                                    28 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    -
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Out of Stock &nbsp;</p> <img src={outofspacedot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    0/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg  ">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 " />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4  whitespace-nowrap">
                                    22 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    -
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Out of Stock &nbsp;</p> <img src={outofspacedot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    0/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg  ">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 " />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4 whitespace-nowrap">
                                    16 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    -
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Out of Stock &nbsp;</p> <img src={outofspacedot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    0/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4   whitespace-nowrap">
                                    9 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a hammer to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    200/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4   whitespace-nowrap">
                                    5 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a hammer to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    200/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 " />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4   whitespace-nowrap">
                                    1 Oct 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a hammer to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    200/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="hidden md:block px-6 py-4   whitespace-nowrap">
                                    23 Sep 2021
                                </td>
                                <td className="px-6 py-4">
                                    Hammer
                                </td>
                                <td className="hidden xl:block px-6 py-4">
                                    This is a hammer to do work with
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <p className='hidden md:block'>Alright &nbsp;</p> <img src={successdot} alt="" />
                                    </div>
                                </td>
                                <td className="text-right px-6 py-4">
                                    200/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Inventory;