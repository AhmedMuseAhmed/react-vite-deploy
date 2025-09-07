import React from 'react'
import {Code2, Globe, Smartphone} from 'lucide-react'

function Hero(){
    return(
        <section id='home' className='relative bg-background'>
            <div className='relative bg-glow'>
                <div className='mx-auto max-w-wrapper px-4 pt-24 pb-16 text-center'>
                    {/* Icon chips */}
                    <div className='mb-6 icon-row opacity-90'>
                        <span className='icon-chip chip-bounce' style={{animationDelay: "2s"}}>
                            <Code2 className='lucide' aria-hidden='true' />
                            <span className='sr-only'>Code</span>
                        </span>
                        <span className='icon-chip chip-bounce' style={{animationDelay: ".15s"}}>
                            <Globe className='lucide' aria-hidden='true'/>
                            <span className='sr-only'>Web</span>
                        </span>
                        <span className='icon-chip chip-bounce' style={{animationDelay: ".30s"}}>
                            <Smartphone className='lucide' aria-hidden='true'/>
                            <span className='sr-only'>Mobile</span>
                        </span>
                    </div>

                    <h2 className='mx-auto max-w-3xl text-4xl md:text-5xl font-extrabold leadinf-tight text-white'>
                        Leading ICT Solutions<br /> in Somalia</h2>
                        <p className='mx-auto mt-4 max-w-2xl text-[15px] text-foreground/80'>
                            Empowering business across Somalia with cutting-edge technology solutions,
                            digital transformation, and innovative ICT services.
                        </p>

                        <div className='mt-6 flex items-center justify-center gap-3'>
                            <a href='#contact' 
                            className='btn btn-primary flex items-center gap-2 px-6 py-2 rounded-full boder border-transparent bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] text-white shadow-lg hover:bg-[#4D8A58] transition-all duration-200'>
                                Get Started
                                <span className='text-lg'>→</span>
                                </a>
                            <a href='#Services' 
                            className='btn btn-ghost px-6 py-2 rounded-full border border-[#6EE7B7] TEXT-[#6EE7B7] hover:bg-[#6EE7B7]/20 transition-all duration-200'
                            >
                                Learn More</a>
                        </div>

                        {/* UI mock frame */}
                        <div className='mx-auto mt-10 max-w-3xl'>
                            <div className='relative overflow-hiden rounded-2xl border border-white/10 bg-black/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]'>
                            {/* subtle inner outline */}
                                <div className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5'/>

                                {/* top bar: dots + pill */}
                                <div className='mb-4 flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <span className='inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]'/>
                                        <span className='inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]'/>
                                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                    </div>

                                    <span className='inline-flex items-center rounded-full border border-white/10 bg-neutral-200 px-2.5 py-1 text-[11px] font-medium text-black'>
                                        Live Demo
                                    </span>
                                </div>

                                {/* Skeleton content */}
                                <div className='space-y-3'>
                                    <div className='h-3 rounded-md bg-neutral-300'/>
                                    <div className='h-3 w-[88%] rounded-md bg-neutral-300'/>
                                    <div className='h-3 w-[62%] rounded-md bg-neutral-700'/>

                                    <div className='grid grid-col-2 gap-4'>
                                        <div className='h-20 rounded-lg bg-neutral-300'/>
                                        <div className='h-20 rounded-lg bg-neutral-300'/>
                                    </div>

                                    <div className='h-3 w-[60%] rounded-md bg-neutral-300'/>
                                </div>

                                {/* soft inner shadow around edges */}
                                <div className='pointer-events-none absolute onset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'/>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Hero