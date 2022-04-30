import React from 'react';
import homeIcon from '../../asstes/Icon/home.svg'
import inventoryIcon from '../../asstes/Icon/inventory.svg'
import documentIcon from '../../asstes/Icon/documents.svg'
import settingIcon from '../../asstes/Icon/settings.svg'
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex '>
            <div className=' font-Inter text-sm border-r'>
                <NavLink to='home'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "black" : "",
                            backgroundColor: isActive ? "white" : "",
                            borderRadius: isActive ? "10px" : ''
                        };
                    }}
                >
                    <div className='flex pl-7 mt-5 pt-4 pr-16'>
                        <img className='mr-2' src={homeIcon} alt="" />
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to='inventory'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "black" : "",
                            backgroundColor: isActive ? "white" : "",
                            borderRadius: isActive ? "10px" : ''
                        };
                    }}
                >
                    <div className='flex pl-7 mt-5 pt-4 pr-16'>
                        <img className='mr-2' src={inventoryIcon} alt="" />
                        <p>Inventory</p>
                    </div>
                </NavLink>
                <NavLink to='document'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "black" : "",
                            backgroundColor: isActive ? "white" : "",
                            borderRadius: isActive ? "10px" : ''
                        };
                    }}
                >
                    <div className='flex pl-7 mt-5 pt-4 pr-16'>
                        <img className='mr-2' src={documentIcon} alt="" />
                        <p>Documents</p>
                    </div>
                </NavLink>
                <NavLink to='settings'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "black" : "",
                            backgroundColor: isActive ? "red" : "",
                            borderRadius: isActive ? "10px" : ''
                        };
                    }}
                >
                    <div className='flex pl-7 mt-5 pt-4 pr-16'>
                        <img className='mr-2' src={settingIcon} alt="" />
                        <p>Settings</p>
                    </div>
                </NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;