import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../public/favicon.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinkStyle = ({ isActive }) => ({
        padding: '8px 20px',
        borderRadius: '14px',
        background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
    });

    return (
        <header className='header'>
            <NavLink
                to="/"
                onClick={closeMenu}
                className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300"
                style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
            >
                <img
                    src={Image}
                    alt="logo"
                    className="w-full h-full object-cover"
                />
            </NavLink>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className='sm:hidden w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300'
                style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            >
                <div className='flex flex-col gap-1.5'>
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden sm:flex text-base gap-4 font-semibold'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={navLinkStyle}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={navLinkStyle}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={navLinkStyle}>
                    Contact
                </NavLink>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <nav
                    className='absolute top-20 right-8 left-8 sm:hidden flex flex-col gap-4 p-6 rounded-2xl animate-in fade-in zoom-in duration-300'
                    style={{
                        background: 'rgba(15, 23, 42, 0.65)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}
                >
                    <NavLink to='/about' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'} style={({ isActive }) => ({
                        ...navLinkStyle({ isActive }),
                        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.12)',
                        padding: '12px 20px',
                    })}>
                        About
                    </NavLink>
                    <NavLink to='/projects' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'} style={({ isActive }) => ({
                        ...navLinkStyle({ isActive }),
                        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.12)',
                        padding: '12px 20px',
                    })}>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'} style={({ isActive }) => ({
                        ...navLinkStyle({ isActive }),
                        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.12)',
                        padding: '12px 20px',
                    })}>
                        Contact
                    </NavLink>
                </nav>
            )}
        </header>
    )
}

export default Navbar