import React from 'react'
import * as LucideIcons from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Star

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] border border-border hover:border-secondary">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-primary" size={32} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  )
}

interface WhyChooseUsCardProps {
  title: string
  description: string
}

export function WhyChooseUsCard({ title, description }: WhyChooseUsCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-muted rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
        <div className="w-6 h-6 rounded-full bg-accent/40" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  title: string
  content: string
  image: string
}

export function TestimonialCard({ name, title, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl">{image}</div>
        <div>
          {/* <h3 className="font-bold text-lg text-foreground">{name}</h3> */}
          <p className="text-secondary text-sm font-medium">{title}</p>
        </div>
      </div>
      <p className="text-foreground/70 leading-relaxed italic">"{content}"</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-accent text-lg">★</span>
        ))}
      </div>
    </div>
  )
}

interface StepCardProps {
  step: number
  title: string
  description: string
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative">
      <div className="bg-white rounded-[10px] p-4 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
       
        <h3 className="text-[16px] font-bold text-foreground mb-3">{title}</h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
      {step < 6 && (
        <div className="hidden md:block absolute right-[-20px] top-[30%] translate-y-[-50%] w-12 h-1 bg-gradient-to-r from-secondary to-transparent" />
      )}
    </div>
  )
}

interface StatisticCardProps {
  number: number
  label: string
}

export function StatisticCard({ number, label }: StatisticCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">
        {number.toLocaleString('ar-SA')}
        {number > 100 ? '+' : ''}
      </div>
      <p className="text-lg text-white/80">{label}</p>
    </div>
  )
}
