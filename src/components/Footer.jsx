import React from 'react';
import {Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail} from 'lucide-react';

function Footer(){
    return(
       <footer className='bg-background border-t border-border'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            {/* Top grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* Brand + blur + socials  */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold'>
                        <span className='text-accent'>Neora</span>
                        <span className='text-foreground'>Tech</span>
                    </h3>

                    <p className='text-foreground text-sm leading-relaxed'>
                        Leading ICT solutions provider in Somalia, dedicated to driving
                        digital transformation and empowering business with innovative
                        technology solutions.
                    </p>

                    <div className='flex space-x-4'>
                        <a 
                            href='#'
                            aria-label='Facebook'
                            className='p-2 bg-muted rounded-lg hover:bg-primary hover:text-background transition-colors duration-300'
                        >
                            <Facebook className='w-5 h-5 text-foreground hover:text-background transition-colors duration-300'/>
                        </a>
                        <a
                            href='#'
                            aria-label='Twitter'
                            className='p-2 bg-muted rounded-lg hover:bg-primary hover:text-background transition-colors duration-300'
                        >
                            <Twitter className='w-5 h-5 text-foreground hover:text-background transition-colos duration-300'/>
                        </a>
                        <a 
                            href='#'
                            aria-label='Linkedin'
                            className='p-2 bg-muted rounded-lg hover:bg-primary hover:text-background transition-colors duration-300'
                        >
                            <Linkedin className='w-5 h-5 text-foreground hover:text-background transition-colors duration-300'/>
                        </a>
                        <a 
                            href='#'
                            aria-label='Instagram'
                            className='p-2 bg-muted rounded-lg hover:bg-primary hover:text-background transition-colors duration-300'
                        >
                            <Instagram className='w-5 h-5 text-foreground hover:text-background transition-colors duration-300'/>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-accent font-semibold mb-4'>
                        Quick Links</h4>
                        <ul className='space-y-2'>
                            <li>
                                <a
                                    href='#home'
                                    className=' text-gray text-foreground hover:text-primary transition-colors duration-300'
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#services'
                                    className='text-gray text-foreground hover:text-primary transition-colors duration-300'
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#about'
                                    className='text-gray text-foreground hover:text-primary transition-colors duration-300'
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#contacts'
                                    className='text-gray text-foreground hover:text-primary transition-colors duration-300'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                </div>

                {/* Services list */}
                <div>
                    <h4 className='text-accent font-semibold mb-4'>Services</h4>
                    <ul className='space-y-2'>
                        <li>
                            <a
                                href='#'
                                className='text-foreground hover:text-primary transition-colors duration-300'

                            >
                                Web Development
                                
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-foreghround hover:text-primary transition-colors duration-300'
                            >
                                Mobile Apps

                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-foreground hover:text-primary transition-colors duration-300'
                            >
                                Cloud Solutions

                            </a>
                        </li>
                        <li>
                            <a 
                                href='#'
                                className='text-foreground hover:text-primary transition-colors duration-300'
                            >
                                IT Consulting

                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className='text-accent font-semibold mb-4'>Contact Info</h4>
                    <div className='space-y-3'>
                        <div className='flex items-center space-x-3'>
                            <MapPin className='w-4 h-4 text-primary'/>
                            <span className='text-foreground text-sm'>
                                Mogadisho, Somalia
                                </span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Phone className="w-4 h-4 text-primary"/>
                            <span className='text-foreground text-sm'>
                                +252 61 XXX XXXX
                            </span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Mail className='w-4 h-4 text-primary'/>
                            <span className='text-foreground text-sm'>
                                info@neoratech.so
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-border mt-12 pt-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-muted -foreground text-sm'>
                      © 2025 Neoratech. All rights reserved.  
                    </p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        <a 
                            href='#'
                            className='text-mjuted-foreground hover:text-primary text:sm transition-colors duration-300'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='text-muted-foreground hover:text-primary text:sm transition-colors duration-300'
                        >
                            Terms of Service
                        </a>
                        <a
                            href='#'
                            className='text-muted-foreground hover:text-primary text:sm transition-colors duration-300'
                        >
                            Cookie Policy
                        </a>
                </div>
            </div>
        </div>
        </div>
       </footer>
    )
}

export default Footer