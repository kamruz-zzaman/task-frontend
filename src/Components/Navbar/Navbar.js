import React from 'react';
import DropDownMenu from './DropDownMenu';
import searchIcon from '../../asstes/Icon/Vector.svg'
import notificationIcon from "../../asstes/Icon/notification.svg"
import personImg from "../../asstes/Icon/person.svg"

const Navbar = () => {
    return (
        <>
            <section className='flex justify-between bg-white py-5 md:py-0'>
                <div className='flex items-center'>
                    <div className='ml-5'>
                        <DropDownMenu
                            title="starbucks"
                        />
                    </div>
                    <div class="hidden md:block ">
                        <div class=" mb-3 xl:w-96 flex justify-center mt-5 ml-28">
                            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                <img src={searchIcon} className="absolute z-10 mt-3 ml-3" alt="" />
                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full pl-9 pr-3 py-1.5 focus:outline-none  text-base font-normal text-gray-700  bg-clip-padding border border-solid bg-gray-100 rounded transition ease-in-out m-0 " placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mr-5'>
                    <div>
                        <img className='mx-2 md:mx-4' src={notificationIcon} alt="" />
                    </div>
                    <div>
                        <img className='mx-0 md:mx-1' src={personImg} alt="" />
                    </div>
                    <div>
                        <DropDownMenu
                            title="John Doe"
                        />
                    </div>
                </div>
            </section>

        </>
    );
};

export default Navbar;