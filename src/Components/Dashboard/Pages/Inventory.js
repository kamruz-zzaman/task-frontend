import React from 'react';
import bottomarrow from "../../../asstes/Icon/bottom-arrow.svg"
import doublearrow from "../../../asstes/Icon/duble-arrow.svg"
import successdot from "../../../asstes/Icon/Ellipse 20.svg"
import progressdot from "../../../asstes/Icon/Ellipse 2.svg"
import outofspacedot from "../../../asstes/Icon/Ellipse 10.svg"
import searchIcon from "../../../asstes/Icon/Vector.svg"
import DropDownMenu from '../../Navbar/DropDownMenu';
import leftIcon from "../../../asstes/Icon/left-btn.svg"
import RightIcon from "../../../asstes/Icon/right-btn.svg"
const Inventory = () => {
    return (
        <>
            <div className='mb-5 font-Inter border-b'>
                <h1 className='m-2 md:m-5  text-2xl font-bold text-gray-600'>Inventory</h1>
            </div>
            <div className="m-2 md:m-5 font-Inter">
                <div className="relative bg-white  shadow-md rounded-lg">
                    <div className="p-4">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={searchIcon} alt="searchIcon" />
                            </div>
                            <input type="search" id="table-search" className="bg-gray-50 border  text-sm rounded-lg  block w-80 pl-10 p-2.5 border-gray-200 focus:outline-none placeholder-gray-400 " placeholder="Search" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left font-medium text-tableText ">
                        <thead className="text-xs bg-tableHead">
                            <tr>
                                <th scope="col" className="p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </th>
                                <th scope="col" className="hidden md:block p-3">
                                    Date Updated <img src={bottomarrow} className="inline" alt="" />
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-3">
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
                                <th scope="col" className="text-right px-3 md:px-6 py-3">
                                    <div className='flex justify-end'>
                                        Amount <img src={doublearrow} className="inline ml-1" alt="" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    11 Nov 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>200</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    10 Nov 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>122</span>/230
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $1220.00
                                </td>

                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    6 Nov 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>100</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $1.5
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $150.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    28 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>0</span>/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg  ">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    22 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>0</span>/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-tdHoverBg  ">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    16 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>0</span>/200
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $0.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    9 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>200</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    5 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>200</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    1 Oct 2021
                                </td>
                                <td className="px-3 md:px-6 py-4">
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
                                    <span className='font-bold'>200</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                            <tr
                                className="bg-white hover:bg-tdHoverBg">
                                <td className="md:w-4 p-0 md:p-4">
                                    <div className="hidden md:block">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    </div>
                                </td>
                                <td className="hidden md:block p-3 whitespace-nowrap">
                                    23 Sep 2021
                                </td>
                                <td className="px-3 md:px-6  py-4">
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
                                    <span className='font-bold'>200</span>/300
                                </td>
                                <td className="text-right hidden xl:block px-6 py-4">
                                    $10
                                </td>
                                <td className="text-right px-3 md:px-6 py-4">
                                    $2000.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mx-3 md:mx-2 py-10 flex justify-between'>
                        <div className='hidden md:block'>
                            <DropDownMenu
                                title="show-more"
                            />
                        </div>
                        <div className='flex'>
                            <DropDownMenu
                                title="page"
                            />
                            <img className='mx-3 cursor-pointer' src={leftIcon} alt="" />
                            <img className='cursor-pointer' src={RightIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventory;