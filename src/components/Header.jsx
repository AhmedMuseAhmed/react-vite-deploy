import React, { useState } from 'react'


function Header(){
    const [open, setOpen] = useState(false)
        return(
            <header className='sticky top-0 z-50 border-b border-neutral-800 bg-black backdrop-blur'>
                <div className='mx-auto max-w-7xl px-4 h-14 flex items-center justify-between'>
                    <h1 className='text-[17px] font-semibold tracking-tight'>NeoraTech</h1>

                    {/* Nav LInks*/}
                    <nav className='hiden md:flex items-center gap-8 text-sm text-white'>
                        <a href='#home'>Home</a>
                        <a href='#services'>Services</a>
                        <a href='#about'>About</a>
                        <a href='#contacts'>Contacts</a>
                        
                    </nav>

                    {/*Mobile hambuger */}
                    <button className='md:hidden text-xl text-white'
                    onClick={() => setOpen(!open)}
                    aria-label='Toggle menu'
                    >
                    </button>
                    
                </div>

                {/* Mobile dropdown  */}
                {open &&(
                    <div>
                      <a href='#home' onClick={() => setOpen(false)}>Home</a>
                      <a href='#services' onClick={() => setOpen(false)}>Services</a>
                      <a href='#about' onClick={() => setOpen(false)}>About</a>  
                      <a href='#contacts' onClick={() => setOpen(false)}>Contacts</a>
                    </div>
                )}
            </header>
        );
    }
    


export default Header