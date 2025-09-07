// src/components/About.jsx
import React from 'react'
import { Target, Lightbulb, Medal, Users2 } from "lucide-react";

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2">
        {value}
      </div>
      <div className="text-foreground font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* soft background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-muted/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text">Neoratech</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering digital transformation in Somalia through innovative ICT solutions and strategic partnerships
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 justify-items-center">
          <Stat value="50+" label="Projects Completed" />
          <Stat value="25+" label="Happy Clients" />
          <Stat value="5+"  label="Years Experience" />
          <Stat value="15+" label="Team Members" />
        </div>

        {/* Two-column band */}
        <div className="mt-12 grid gap-10 lg:gap-14 items-start lg:grid-cols-[1.15fr_1fr]">
          {/* Left narrative */}
          <div className="text-left mx-auto lg:mx-0 max-w-[44rem]">
            <h3 className="text-3xl font-bold text-accent mb-6">
              Transforming Somalia&apos;s Digital Landscape
            </h3>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                At Neoratech, we are committed to driving digital transformation across Somalia.
                Founded with a vision to bridge the technology gap, we provide world-class ICT
                solutions that empower businesses and organizations to thrive in the digital age.
              </p>
              <p>
                Our team of experienced professionals combines local market knowledge with
                international best practices to deliver solutions that are both innovative and
                practical for the Somali business environment.
              </p>
              <p>
                From small startups to large enterprises, we partner with organizations across
                various sectors to implement technology solutions that drive growth, efficiency,
                and competitive advantage.
              </p>
            </div>
          </div>

          {/* Right mission card */}
          <div className="justify-self-center w-full max-w-[640px]">
            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8 flex flex-col items-center justify-center text-center">
              <div className="h-24 w-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-bold text-accent mb-4">Our Mission</h4>
              <p className="text-foreground text-sm leading-relaxed">
                To accelerate Somalia&apos;s digital transformation by providing innovative, reliable,
                and scalable ICT solutions that drive economic growth and social development.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <h3 className="text-3xl font-bold text-accent text-center mb-12 mt-16">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Innovation */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Lightbulb className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
              Innovation
            </h4>
            <p className="text-foreground text-sm leading-relaxed">
              We embrace cutting-edge technologies and innovative approaches to solve complex challenges.
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Medal className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
              Excellence
            </h4>
            <p className="text-foreground text-sm leading-relaxed">
              We deliver high-quality solutions that exceed expectations and drive business success.
            </p>
          </div>

          {/* Collaboration */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Users2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
              Collaboration
            </h4>
            <p className="text-foreground text-sm leading-relaxed">
              We work closely with our clients to understand their needs and deliver tailored solutions.
            </p>
          </div>

          {/* Results */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Target className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
              Results
            </h4>
            <p className="text-foreground text-sm leading-relaxed">
              We focus on measurable outcomes that contribute to our clients&apos; growth and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
