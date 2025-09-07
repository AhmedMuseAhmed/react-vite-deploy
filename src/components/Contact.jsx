import React from 'react';
import {MapPin, Phone, Mail, Clock, Send} from 'lucide-react';


/** Small, reusable info card (location, phone, Email, Working Hours) */

function InfoCard({icon: Icon, title, lines}) {
    return(
        <div className='p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300'>
            <div className='flex items-center mb-4'>
                <div className='w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mr-3'>
                    <Icon className='w-8 h-8 text-primary'/>
                </div>
                <h4 className='text-accent font-semibold'>{title}</h4>
            </div>

            <div className='space-y-1'>
                {lines.map((t, i) => (
                    <p key={i} className='text-foreground text-sm'>
                        {t}
                    </p>
                ))}
            </div>
        </div>
    );
}

function Contact(){
    return(
       <section id='contacts' className='py-20 bg-muted relative overflow-hidden'>
        {/* soft background glows */}
        <div className='absolute inset-0 -z-10'>
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-grey-400 rounded-full blur-3xl'/>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
        </div>

        <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <div className='text-center mb-6'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-accent mb-6'>
                    Get In{" "}
                    <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text'>
                        Touch</span>
                </h2>
                <p className='text-xl text-foreground max-w-3xl mx-auto leading-relaxed'>
                    Ready to transform your business with innovative ICT solutions? let's discuss your
                    project.
                </p>
            </div>

            {/* 2-column layout */}
            <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* ===Left: Contact information + why choose === */}
                <div className='space-y-8'>
                    <div>
                        <h3 className='text-2xl font-bold text-accent mb-6'>
                            Contact Information</h3>
                        <p className='text-foreground mb-8 leading-relaxed'>
                            We here to help you achieve your digital tranasformation goals. Reach out to us
                            through any of the channels bellow.
                        </p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            <InfoCard
                                icon={MapPin}
                                title="Location"
                                lines={["Mogadisho, Somalia", "Hodan District"]} 
                            />
                            <InfoCard
                                icon={Phone}
                                title="Phone"
                                lines={['+252 XXXX XXXX', "+252 90 XXXX XXXX"]} 
                            />
                            <InfoCard
                                icon={Mail}
                                title="Email"
                                lines={["info@neoratech.so", "contact@neoratech.so"]} 
                            />
                            <InfoCard
                                icon={Clock}
                                title="Working Hours"
                                lines={["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - 9:00 AM - 2:00 PM"]} 
                            />
                        </div>
                    </div>

                    {/* Why choose card */}
                    <div className='p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20'>
  <h3 className='text-2xl font-bold text-acccent mb-3'>Why choose Neoratech</h3>
  <ul className='list-disc pl-5 space-y-2 text-foreground text-sm'>
    <li>Local expertise with international students</li>
    <li>24/7 technical support and maintenance</li>
    <li>Competitive pricing and flexible packages</li>
    <li>Proven track record in Somalia's market</li>
  </ul>
</div>

                </div>

                {/* ==== Right: Form ==== */}
                <div className='p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-pr imary/50 transition-all duration-300 p-8'>
                    <h3 className='text-2xl font-bold text-accent mb-6'>Send us a message</h3>

                    <form className='space-y-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="firstname" className='block text-foreground text-sm font-medium mb-2'>
                                    Firstt Name
                                    </label>

                                    <input
                                        type="text"
                                        id='firstname'
                                        className='w-full px-4 py-3 bg-input border border-border rounded-lg text-accent placeholder-muted-foreground focus:outline-none 
                                        focus:border-primary transition-colors duration-300' 
                                        placeholder='John'
                                    />
                            </div>

                            <div>
                                <label htmlFor='lastname' className='block text-foreground text-sm font-medium mb-2'>
                                    Last Name
                                    </label>
                                    <input
                                        type='text'
                                        id='lastname'
                                        className='w-full px-4 py-3 bg=input border border-border rounded-lg text-accent plcaeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300'
                                        placeholder='Doe' 
                                    />
                            </div>
                        </div>
                        <div>
                                <label htmlFor='email' className='block text-foreground text-sm font-medium mb-2'>
                                    Email Adress
                                </label>
                                <input 
                                    type='email'
                                    id='email'
                                    className='w-full px-4 py-3 bg-input border border-border rounded-lg text-accent placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300' 
                                    placeholder='john@example.com'
                                />
                            </div>
                        <div>
                                <label htmlFor='phone' className='block text-foreground text-sm-center font-medium mb-2'>
                                    Phone Number
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    className='w-full px-4 py-3 bg-input border border-border rounded-lg text-accent placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300'
                                    placeholder='+252 XX XXX XXXX' 
                                />
                            </div>
                        <div>
                            <label htmlFor='service' className='block text-forground text-sm font-medium mb-2'>
                                Service Interested In
                            </label>
                             <select
                                id='service'
                                className='w-full px-4 py-3 bg-input border border-border rounded-lg text-accent focus:outline-none focus:border-primary transition-colors duration-300'
                             >
                                <option value="">Select a service</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-deveblopment">Mobile Development</option>
                                <option value="cloud-solutions">Cloud Solutions</option>
                                <option value="database-management">Database Management</option>
                                <option value="cybersecurity">Cybersecurity</option>
                                <option value="it-consulting">IT Consulting</option>

                             </select>
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-foreground text-sm font-medium mb-2'>
                                Message
                            </label>

                            <textarea 
                                id='message'
                                rows={4}
                                className='w-full px-4 py-3 bg-input border border-border rounded-lg text-accent placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none'
                                placeholder='Tell us about your project requirements....' 
                            />
                        </div>

                        <button 
                            type='submit'
                            className='w-full bg-gradient-to-r from-primary to-secondary text-background py-3 px-6 rounded-lg font-semibold hover:from-primary/90 hover:to-secondary-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2' 
                        >
                            <Send className='w-5 h-5'/>
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Contact