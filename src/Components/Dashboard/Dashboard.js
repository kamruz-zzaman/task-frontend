import React, { useState } from 'react';
import homeIcon from '../../asstes/Icon/home.svg'
import inventoryIcon from '../../asstes/Icon/inventory.svg'
import documentIcon from '../../asstes/Icon/documents.svg'
import settingIcon from '../../asstes/Icon/settings.svg'
import { NavLink, Outlet } from 'react-router-dom';
import homeColorIcon from '../../asstes/Icon/home -color.svg'
import inventColor from '../../asstes/Icon/inventory -color.svg'
import documentColorIcon from '../../asstes/Icon/document-color.svg'
import settingColor from '../../asstes/Icon/settings -color.svg'

const Dashboard = () => {
    const [iconColor, setIconColor] = useState(homeIcon);
    const [inventColorr, setIinventColor] = useState(inventoryIcon);
    const [docColorr, setDocIcon] = useState(documentIcon);
    const [settingColorIcon, setSettingColorIcon] = useState(settingIcon);
    return (
        <div className='flex '>
            <div className='hidden lg:block font-Inter text-sm border-r'>
                <NavLink to='home'
                    className="mx-4"
                    style={({ isActive }) => {
                        isActive ? setIconColor(homeColorIcon) : setIconColor(homeIcon)
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : "",
                        };
                    }}
                >
                    <div className='flex mt-5 pl-4 pr-10 py-3'>
                        <img className='mr-2' src={iconColor} alt="" />
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to='inventory'
                    className="mx-4"
                    style={({ isActive }) => {
                        isActive ? setIinventColor(inventColor) : setIinventColor(inventoryIcon)
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='flex mt-2 pl-4 pr-10 py-3'>
                        <img className='mr-3' src={inventColorr} alt="" />
                        <p>Inventory</p>
                    </div>
                </NavLink>
                <NavLink to='document'
                    className="mx-4"
                    style={({ isActive }) => {
                        isActive ? setDocIcon(documentColorIcon) : setDocIcon(documentIcon)
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='flex mt-2 pl-4 pr-10 py-3'>
                        <img className='mr-2' src={docColorr} alt="" />
                        <p>Documents</p>
                    </div>
                </NavLink>
                <NavLink to='settings'
                    className="mx-4"
                    style={({ isActive }) => {
                        isActive ? setSettingColorIcon(settingColor) : setSettingColorIcon(settingIcon)
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='flex mt-2 pl-4 pr-10 py-3'>
                        <img className='mr-2' src={settingColorIcon} alt="" />
                        <p>Settings</p>
                    </div>
                </NavLink>
            </div>
            <div className='hidden md:block lg:hidden font-Inter text-sm border-r'>
                <NavLink to='home'
                    className="mx-4"
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='mt-5 '>
                        <img className='px-3 py-3' src={homeIcon} alt="" />
                    </div>
                </NavLink>
                <NavLink to='inventory'
                    className="mx-4"
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='mt-5 '>
                        <img className='px-3 py-3 ml-1' src={inventoryIcon} alt="" />
                    </div>
                </NavLink>
                <NavLink to='document'
                    className="mx-4"
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='mt-5 '>
                        <img className='px-3 py-3 ml-1' src={documentIcon} alt="" />
                    </div>
                </NavLink>
                <NavLink to='settings'
                    className="mx-4"
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            color: isActive ? "#00C614" : "",
                            background: isActive ? "#FFFFFF" : "",
                            boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                        };
                    }}
                >
                    <div className='mt-5 '>
                        <img className='px-3 py-3 ml-1' src={settingIcon} alt="" />
                    </div>
                </NavLink>
            </div>
            <div>
                <Outlet />
                <div className='block md:hidden'>
                    <div className='flex w-full justify-center items-center' style={{
                        background: "#FFFFFF",
                        boxShadow: "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
                        position: "fixed",
                        bottom: "0px"
                    }}>
                        <NavLink to='home'
                            className="mx-4"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    color: isActive ? "#00C614" : "",
                                    background: isActive ? "#FFFFFF" : "",
                                    boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                                };
                            }}
                        >
                            <div>
                                <img className='px-3 py-3' src={homeIcon} alt="" />
                            </div>
                        </NavLink>
                        <NavLink to='inventory'
                            className="mx-4"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    color: isActive ? "#00C614" : "",
                                    background: isActive ? "#FFFFFF" : "",
                                    boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                                };
                            }}
                        >
                            <div>
                                <img className='px-3 py-3 ml-1' src={inventoryIcon} alt="" />
                            </div>
                        </NavLink>
                        <NavLink to='document'
                            className="mx-4"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    color: isActive ? "#00C614" : "",
                                    background: isActive ? "#FFFFFF" : "",
                                    boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                                };
                            }}
                        >
                            <div>
                                <img className='px-3 py-3 ml-1' src={documentIcon} alt="" />
                            </div>
                        </NavLink>
                        <NavLink to='settings'
                            className="mx-4"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    color: isActive ? "#00C614" : "",
                                    background: isActive ? "#FFFFFF" : "",
                                    boxShadow: isActive ? "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)" : ""
                                };
                            }}
                        >
                            <div>
                                <img className='px-3 py-3 ml-1' src={settingIcon} alt="" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;