import React from 'react'
import {Globe, Smartphone, Cloud, Database, Shield, MonitorCog, ArrowRight} from 'lucide-react';

const data = [
    {
        title: 'Web Development',
        icon: Globe,
        desc:
            "Custom websites and web applications built with modern technologies and responsive design principles.",
        points: [
            'React / Next.js',
            'E-commerce Solutions',
            'CMS Development',
            'API Integration',
        ],
    },
    {
        title: 'Mobile Development',
        icon: Smartphone,
        desc:
            "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
        points:[
            'IOS & Android (React Native)',
            'Native modules',
            'App Store Deployment',
            'Performance',
        ],
    },
    {
        title: 'Cloud Solutions',
        icon: Cloud,
        desc:
            "Scalable cloud infrastructure and migration services to optimize your business operations.",
        points: [
            'AWS / GCP / Azure',
            'CI/CD & Migration',
            'Scalable Infra',
            'Serverless Architecture',
        ],
    },
    {
        title: 'Database Management',
        icon: Database,
        desc:
            "Comprehensive database design, optimization, and management services for your data needs.",
        points:[
            'Design & Tuning',
            'Performance',
            'Data Migration',
            'Backups',
        ],
    },
    {
        title: 'Cypersecurity',
        icon: Shield,
        desc: 
            "Protect your digital assets with our comprehensive cybersecurity solutions and monitoring.",
        points:[
            'Security Audits',
            'Pen Testing',
            'Compliance',
            '24/7 Monitoring'
        ],
    },
    {
        title: 'IT Consulting',
        icon: MonitorCog,
        desc:
            "Strategic IT consulting to help your business leverage technology for growth and efficiency.",
        points:[
            'Digital Strategy',
            'Technology Roadmap',
            'Training and Support',
            'Cost Optimazation',
        ],
    },
];


function Services(){
    return(
        <section id="services" className="py-16 scroll-mt-20">
            <div className="mx-auto max-w-wrapper px-4">
                {/* Heading */}
                <div className=" text-center mb-10">
                    <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>Our Services</h2>
                    <p className='mt-2 text-sm md:text-base text-foreground/80 max-w-2xl mx-auto'>
                        Comprehensive ICT solutions tailored to the unique needs of businesses in Somalia
                    </p>
                </div>

                {/* grid */}
                <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                     <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-between'>
                    {data.map(({title, icon: Icon, desc, points}) =>(
                        <article key={title}
                        tabIndex={0} 
                        className='
                        w-full
                        relative rounded-2xl border border-white/10 bg-white/[0.03] p-6
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 ease-out
                        transform-gpu will-change-transform hover:translate-y-1
                         hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:border-white/20
                         focus-visible:-translate-y-1 focus-visible:shadow-[0_24px_60_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 
                         motion-reduce:transform-none motion-reduce:transition-none text-let'>

                            <div className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5' />

                            {/* inner subtle outline*/}
                            <div className='flex items-center gap-3'>
                                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg
                                border border-white/10 bg-white/[0.06]'>
                                    {Icon ? ( 
                                         <Icon className='h-5 w-5 text-white/90' aria-hidden="true"/> ) : (
                                         <span>💡</span>)}
                                </div>
                                <h3 className='text-white font-semibold'>{title}</h3>
                            </div>

                            {/* description */}
                            <p className='mt-3 text-sm text-foreground/85'>
                                {desc}
                            </p>

                            {/* bullet list */}
                            <ul className='mt-3 list-disc list-inside space-y-2 text-sm text-forground/90' >
                                {points.map((p) =>(
                                    <li key={p}
                                    className='[&::marker]:text-white/70 [&::marker]:text-base'
                                    >
                                        {p}
                                        </li>
                                ))}
                            </ul>

                            {/* DIVDER + LINK */}
                            <div className='my-4 h-px bg-white/10' />
                            <a href='#contact' className='inline-flex items-center gap-1.5 text-sm text-foreground/90 hover:text-white'>
                                Learn More <span>→</span>
                            </a>

                            {/* soft bottom glow like the screenshot */}
                            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-gradient-to-t from-white/[0.04] to-transparent'/>
                        </article>
                    ))}
                </div>
                </div>
               
            </div>
        </section>
    )
}

export default Services