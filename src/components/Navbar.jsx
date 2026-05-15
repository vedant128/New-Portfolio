import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg transition-all duration-300' style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
                <p className='blue-gradient_text' style={{ fontSize: '1.2rem' }}>VG</p>
            </NavLink>
            <nav className='flex text-base gap-4 font-semibold'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={({ isActive }) => ({
                    padding: '8px 20px',
                    borderRadius: '14px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                })}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={({ isActive }) => ({
                    padding: '8px 20px',
                    borderRadius: '14px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                })}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} style={({ isActive }) => ({
                    padding: '8px 20px',
                    borderRadius: '14px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                })}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar