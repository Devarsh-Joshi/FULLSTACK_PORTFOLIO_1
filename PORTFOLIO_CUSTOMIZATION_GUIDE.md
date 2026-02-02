# Portfolio Customization Guide

A complete guide to customizing every section of your portfolio project.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Navigation Section](#navigation-section)
3. [Hero Section](#hero-section)
4. [Projects Section](#projects-section)
5. [About Section](#about-section)
6. [Skills Section](#skills-section)
7. [Contact Section](#contact-section)
8. [Footer Section](#footer-section)
9. [Global Styling & Colors](#global-styling--colors)

---

## Getting Started

The main portfolio file is located at: `client/src/pages/portfolio.tsx`

All changes should be made in this file. The portfolio uses:
- **React** for component structure
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide Icons** for icons

---

## Navigation Section

### Location in Code
Lines 75-147 in `portfolio.tsx`

### What You Can Change

#### 1. **Logo Text**
**Current:**
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">A</span>
<span className="text-white">LEX</span>
```

**How to Change:** Replace "A" and "LEX" with your initials or name
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">J</span>
<span className="text-white">OHN</span>
```

#### 2. **Navigation Menu Items**
**Current:**
```tsx
{['Work', 'About', 'Skills', 'Contact'].map((item, i) => (
```

**How to Change:** Add or remove items from the array
```tsx
{['Work', 'About', 'Skills', 'Contact', 'Blog'].map((item, i) => (
```

#### 3. **CTA Button Text**
**Current:**
```tsx
<motion.a
  href="#contact"
  ...
  className="..."
>
  Let's Talk
  <ArrowUpRight size={16} ... />
</motion.a>
```

**How to Change:** Replace "Let's Talk" with your desired text
```tsx
Let's Collaborate
```

---

## Hero Section

### Location in Code
Lines 148-371 in `portfolio.tsx`

### What You Can Change

#### 1. **Status Badge**
**Current:**
```tsx
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
  <span className="text-sm font-medium text-cyan-400">Available for exciting projects</span>
</div>
```

**How to Change:**
```tsx
<span className="text-sm font-medium text-cyan-400">Open for freelance work</span>
```

#### 2. **Main Headline**
**Current:**
```tsx
<h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.85] tracking-tighter">
  <span className="text-white">CREATIVE</span>
</h1>
// ... more lines
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">FULLSTACK</span>
// ... 
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">DEVELOPER</span>
```

**How to Change:** Replace with your own titles
```tsx
<span className="text-white">INNOVATIVE</span>
// Second line
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">PRODUCT</span>
// Third line
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">ENGINEER</span>
```

#### 3. **Subtitle/Description**
**Current:**
```tsx
<p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed">
  I transform ideas into <span className="text-white">stunning digital experiences</span> that captivate users and drive results.
</p>
```

**How to Change:**
```tsx
<p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed">
  I build <span className="text-white">scalable solutions</span> that solve real problems and exceed expectations.
</p>
```

#### 4. **CTA Button**
**Current:**
```tsx
<motion.a
  href="#work"
  ...
>
  <span className="relative z-10 flex items-center gap-2">
    Explore Work
    <MoveRight size={18} ... />
  </span>
</motion.a>
```

**How to Change:**
```tsx
View My Projects
```

#### 5. **Stats Card** (Right side)
**Current:**
```tsx
{[
  { label: 'Years', value: '5+' },
  { label: 'Projects', value: '50+' },
  { label: 'Clients', value: '30+' },
  { label: 'Awards', value: '12' },
]}
```

**How to Change:** Update values to match your experience
```tsx
{[
  { label: 'Years', value: '3+' },
  { label: 'Projects', value: '25+' },
  { label: 'Clients', value: '15+' },
  { label: 'Awards', value: '5' },
]}
```

#### 6. **Technology Stack (Bottom Marquee)**
**Current:**
```tsx
{['REACT', 'NEXT.JS', 'TYPESCRIPT', 'THREE.JS', 'FRAMER MOTION', 'TAILWIND', 'FIGMA', 'WEBGL'].map((tech) => (
```

**How to Change:** Replace with your tech stack
```tsx
{['REACT', 'VUE.JS', 'PYTHON', 'POSTGRESQL', 'DOCKER', 'AWS', 'FIGMA'].map((tech) => (
```

---

## Projects Section

### Location in Code
Lines 4-32 (Project data) and Lines 372-452 (Project display)

### What You Can Change

#### 1. **Add/Remove Projects**

**Current Projects Array:**
```tsx
const projects = [
  {
    id: 1,
    title: 'NEBULA',
    subtitle: 'Dashboard',
    description: 'Real-time analytics with 3D visualization',
    tags: ['React', 'Three.js', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: '#00fff5',
  },
  // ... more projects
];
```

**How to Add New Project:**
```tsx
{
  id: 4,
  title: 'NOVA',
  subtitle: 'Mobile App',
  description: 'Cross-platform fitness tracking application',
  tags: ['React Native', 'Firebase', 'Redux'],
  image: 'https://images.unsplash.com/photo-1512941691920-25bef266446b?w=800&q=80',
  color: '#ff6b9d',
}
```

#### 2. **Edit Project Details**

**Change Title:**
```tsx
title: 'NEBULA'  // ← Change this
```

**Change Subtitle:**
```tsx
subtitle: 'Dashboard'  // ← Change this
```

**Change Description:**
```tsx
description: 'Real-time analytics with 3D visualization'  // ← Change this
```

**Change Tags:**
```tsx
tags: ['React', 'Three.js', 'WebGL']  // ← Add or remove
```

**Change Image:**
```tsx
image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
```
Get images from:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)
- Or upload your own images to `client/public/`

**Change Accent Color:**
```tsx
color: '#00fff5'  // ← Use any hex color
```

#### 3. **Section Title & Description**
**Current:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Selected Work</span>
<h2 className="font-display text-5xl md:text-7xl font-black mt-4">
  Featured<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
</h2>
```

**How to Change:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">My Portfolio</span>
<h2 className="font-display text-5xl md:text-7xl font-black mt-4">
  Recent<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Work</span>
</h2>
```

---

## About Section

### Location in Code
Lines 453-578 in `portfolio.tsx`

### What You Can Change

#### 1. **Section Label & Title**
**Current:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">About Me</span>
<h2 className="font-display text-5xl md:text-6xl font-black mt-4 leading-tight">
  Engineering Complete<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
    Digital Solutions
  </span>
</h2>
```

**How to Change:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Who I Am</span>
<h2 className="font-display text-5xl md:text-6xl font-black mt-4 leading-tight">
  Building Innovative<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
    Web Experiences
  </span>
</h2>
```

#### 2. **Bio/Description Text**
**Current:**
```tsx
<p>
  I'm a <span className="text-white font-medium">Fullstack Engineer</span> who builds robust, scalable, and visually stunning applications from the ground up. With 5+ years of experience, I bridge the gap between complex backend systems and delightful frontend interfaces.
</p>
<p>
  My philosophy? <span className="text-white font-medium">Fullstack is about ownership.</span> I take pride in understanding the entire stack, from database optimization to the final pixel on the screen, ensuring every layer of the application works in perfect harmony.
</p>
```

**How to Change:**
```tsx
<p>
  I'm a <span className="text-white font-medium">Senior Frontend Engineer</span> with a passion for creating beautiful, performant user interfaces. With 7+ years of experience, I specialize in building modern web applications that users love.
</p>
<p>
  My approach combines <span className="text-white font-medium">design thinking with technical excellence.</span> I believe great products come from understanding both the user's needs and the technical constraints, balancing them to create seamless experiences.
</p>
```

#### 3. **Social Links**
**Current:**
```tsx
{[
  { icon: Github, href: 'https://github.com', label: 'github' },
  { icon: Twitter, href: 'https://x.com', label: 'twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
]}
```

**How to Change:** Update URLs with your actual profiles
```tsx
{[
  { icon: Github, href: 'https://github.com/yourusername', label: 'github' },
  { icon: Twitter, href: 'https://x.com/yourhandle', label: 'twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'linkedin' },
]}
```

#### 4. **Profile Card - Initials**
**Current:**
```tsx
<div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1">
  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
    <span className="font-display text-4xl font-black">AC</span>
  </div>
</div>
```

**How to Change:**
```tsx
<span className="font-display text-4xl font-black">JD</span>  // Your initials
```

#### 5. **Code Block in Profile Card**
**Current:**
```tsx
<p className="pl-4">name: <span className="text-pink-400">"Alex Chen"</span>,</p>
<p className="pl-4">role: <span className="text-pink-400">"Fullstack Dev"</span>,</p>
<p className="pl-4">stack: [<span className="text-pink-400">"React"</span>, <span className="text-pink-400">"Node.js"</span>],</p>
<p className="pl-4">coffee: <span className="text-primary">true</span>,</p>
<p className="pl-4">available: <span className="text-primary">true</span></p>
```

**How to Change:**
```tsx
<p className="pl-4">name: <span className="text-pink-400">"John Doe"</span>,</p>
<p className="pl-4">role: <span className="text-pink-400">"Product Designer"</span>,</p>
<p className="pl-4">stack: [<span className="text-pink-400">"Figma"</span>, <span className="text-pink-400">"React"</span>],</p>
<p className="pl-4">coffee: <span className="text-primary">true</span>,</p>
<p className="pl-4">available: <span className="text-primary">true</span></p>
```

---

## Skills Section

### Location in Code
Lines 35-40 (Skills data) and Lines 579-627 (Skills display)

### What You Can Change

#### 1. **Update Skills Categories**

**Current:**
```tsx
const skills = [
  { icon: Code, title: 'Frontend Wizardry', items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Rocket, title: 'DevOps & Cloud', items: ['Docker & CI/CD', 'AWS/Vercel', 'Serverless', 'Performance Tuning'] },
  { icon: Star, title: 'Architecture', items: ['System Design', 'Microservices', 'Database Modeling', 'Security Best Practices'] },
];
```

**How to Change - Add New Skill Category:**
```tsx
const skills = [
  { icon: Code, title: 'Frontend Wizardry', items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Rocket, title: 'DevOps & Cloud', items: ['Docker & CI/CD', 'AWS/Vercel', 'Serverless', 'Performance Tuning'] },
  { icon: Star, title: 'Architecture', items: ['System Design', 'Microservices', 'Database Modeling', 'Security Best Practices'] },
  { icon: Code, title: 'Mobile Development', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
];
```

#### 2. **Edit Skill Title**
**Change from:** `'Frontend Wizardry'`
**Change to:** `'Web Development'`

#### 3. **Edit Skill Items**
**Change from:**
```tsx
items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
```

**Change to:**
```tsx
items: ['Vue.js', 'JavaScript', 'Bootstrap', 'Gsap']
```

#### 4. **Change Skill Card Icon**

Available icons from Lucide:
- `Code` - For coding/development
- `Rocket` - For deployment/DevOps
- `Star` - For excellence/architecture
- `Zap` - For performance
- `Database` - For databases
- `Users` - For team/collaboration
- `Shield` - For security

**How to Change:**
```tsx
import { Code, Rocket, Star, Zap, Database } from 'lucide-react';

// Then update the icon:
{ icon: Zap, title: 'Performance', items: [...] }
```

#### 5. **Section Title**
**Current:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Expertise</span>
<h2 className="font-display text-5xl md:text-7xl font-black mt-4">
  My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
</h2>
```

**How to Change:**
```tsx
<span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Skills</span>
<h2 className="font-display text-5xl md:text-7xl font-black mt-4">
  What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Do</span>
</h2>
```

---

## Contact Section

### Location in Code
Lines 628-747 in `portfolio.tsx`

### What You Can Change

#### 1. **Section Title**
**Current:**
```tsx
<h2 className="font-display text-6xl md:text-8xl font-black mt-4 leading-none">
  READY TO<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
    INITIATE?
  </span>
</h2>
```

**How to Change:**
```tsx
<h2 className="font-display text-6xl md:text-8xl font-black mt-4 leading-none">
  LET'S<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
    CONNECT
  </span>
</h2>
```

#### 2. **Description Text**
**Current:**
```tsx
<p className="text-xl text-white/50 max-w-md leading-relaxed">
  Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open for groundbreaking ideas.
</p>
```

**How to Change:**
```tsx
<p className="text-xl text-white/50 max-w-md leading-relaxed">
  Got an exciting opportunity or just want to chat? Drop me a line and let's create something amazing together!
</p>
```

#### 3. **Contact Information**
**Current:**
```tsx
{[
  { icon: Mail, label: 'Email', value: 'hello@alexchen.dev', href: 'mailto:hello@alexchen.dev' },
  { icon: Twitter, label: 'Twitter', value: '@alexchen_dev', href: 'https://x.com' },
  { icon: Github, label: 'Github', value: 'alexchen-dev', href: 'https://github.com' },
]}
```

**How to Change:**
```tsx
{[
  { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: Twitter, label: 'Twitter', value: '@yourhandle', href: 'https://x.com/yourhandle' },
  { icon: Github, label: 'Github', value: 'yourusername', href: 'https://github.com/yourusername' },
]}
```

#### 4. **Form Labels & Placeholders**
**Current:**
```tsx
<label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Name</label>
<input type="text" ... placeholder="John Doe" />

<label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Email</label>
<input type="email" ... placeholder="john@example.com" />

<label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Message</label>
<textarea ... placeholder="What's on your mind?" />
```

**How to Change:**
These are fine as generic placeholders, but you can change:
```tsx
placeholder="Your Name"
placeholder="your@email.com"
placeholder="Tell me about your project..."
```

#### 5. **Form Title**
**Current:**
```tsx
<h3 className="text-2xl font-display font-bold">Drop a message</h3>
```

**How to Change:**
```tsx
<h3 className="text-2xl font-display font-bold">Send Me an Email</h3>
```

#### 6. **Submit Button Text**
**Current:**
```tsx
SEND TRANSMISSION
```

**How to Change:**
```tsx
SEND MESSAGE
// or
GET IN TOUCH
// or
SUBMIT
```

#### 7. **Form Functionality**
**Note:** The form currently shows UI but doesn't send emails. To make it functional, you need:
- Backend service (Node.js/Express) or
- Third-party service like Formspree, EmailJS, or Netlify Forms

For a quick solution, replace the button with:
```tsx
<motion.a
  href="mailto:your.email@example.com"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-bold rounded-xl shadow-[0_0_30px_rgba(0,255,245,0.2)] hover:shadow-[0_0_50px_rgba(0,255,245,0.4)] transition-all duration-500"
>
  SEND MESSAGE
</motion.a>
```

---

## Footer Section

### Location in Code
Lines 748-778 in `portfolio.tsx`

### What You Can Change

#### 1. **Copyright Text**
**Current:**
```tsx
<p className="text-sm text-white/40">
  © 2026 Alex Chen. Designed & Built with 💜
</p>
```

**How to Change:**
```tsx
<p className="text-sm text-white/40">
  © 2026 John Doe. All Rights Reserved
</p>
```

#### 2. **Social Links**
**Current:**
```tsx
{[
  { icon: Github, href: 'https://github.com', label: 'github' },
  { icon: Twitter, href: 'https://x.com', label: 'twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
]}
```

**How to Change:** Update with your actual profiles
```tsx
{[
  { icon: Github, href: 'https://github.com/yourusername', label: 'github' },
  { icon: Twitter, href: 'https://x.com/yourhandle', label: 'twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'linkedin' },
]}
```

#### 3. **Footer Tagline**
**Current:**
```tsx
<p className="text-sm text-white/40 font-mono">
  <span className="text-cyan-400">{'</'}</span>built with passion<span className="text-cyan-400">{'>'}</span>
</p>
```

**How to Change:**
```tsx
<p className="text-sm text-white/40 font-mono">
  <span className="text-cyan-400">{'<'}</span>code with ❤️<span className="text-cyan-400">{'>'}</span>
</p>
```

---

## Global Styling & Colors

### Location in Code
Throughout the file

### Color Scheme

The portfolio uses a gradient color scheme:
- **Cyan:** `#00fff5` or `from-cyan-400` / `to-cyan-500`
- **Purple:** `#a78bfa` or `from-purple-500` / `to-purple-600`
- **Pink:** `#ec4899` or `from-pink-500` / `to-pink-600`

### How to Change Global Colors

#### 1. **Change Gradient in Titles**
**Current:**
```tsx
bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
```

**Options:**
- `from-blue-400 via-green-500 to-teal-500` (Blue-Green)
- `from-orange-400 via-red-500 to-pink-500` (Warm)
- `from-indigo-400 via-purple-500 to-pink-500` (Purple)
- `from-yellow-400 via-orange-500 to-red-500` (Fire)

Replace all instances in the file to change the entire color scheme.

#### 2. **Change Button Colors**
**Current:**
```tsx
bg-gradient-to-r from-cyan-500 to-purple-500
```

**How to Change:**
```tsx
bg-gradient-to-r from-blue-500 to-green-500
```

#### 3. **Change Accent Borders**
**Current:**
```tsx
border-cyan-500/30
hover:border-cyan-400/30
```

**How to Change:** Replace `cyan` with any color:
```tsx
border-blue-500/30
hover:border-blue-400/30
```

#### 4. **Change Floating Orbs**
**Location:** Lines 42-74 (FloatingOrbs function)

**Current:**
```tsx
<motion.div
  ...
  className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
/>
```

**How to Change:**
```tsx
className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
```

---

## Additional Tips & Tricks

### 1. **Changing Font Sizes**
- `text-sm` = Small
- `text-base` = Normal
- `text-lg` = Large
- `text-xl` = Extra Large
- `text-5xl` = 5x Large
- `text-7xl` = 7x Large
- `text-9xl` = 9x Large

### 2. **Changing Animation Speed**
Look for `duration: X` in motion components:
```tsx
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        ↑ Change this number
```
- Smaller = Faster
- Larger = Slower

### 3. **Changing Spacing**
- `px-6` = Horizontal padding (small)
- `px-12` = Horizontal padding (large)
- `py-8` = Vertical padding
- `gap-4` = Space between items

### 4. **Changing Transparency**
- `/5` = 5% opacity
- `/20` = 20% opacity
- `/50` = 50% opacity

### 5. **Adding New Sections**
Create a new function before the export:
```tsx
function NewSection() {
  return (
    <section id="newsection" className="py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Your content */}
      </div>
    </section>
  );
}
```

Then add it to the main Portfolio component:
```tsx
<Contact />
<NewSection />  // ← Add here
<Footer />
```

---

## Quick Reference

| Section | Line Numbers | What to Change |
|---------|-------------|-----------------|
| Projects Data | 4-32 | Project details |
| Skills Data | 35-40 | Skill categories |
| Navigation | 75-147 | Menu & Logo |
| Hero | 148-371 | Headline & Stats |
| Work | 372-452 | Section titles |
| About | 453-578 | Bio & Profile |
| Skills | 579-627 | Skill cards |
| Contact | 628-747 | Contact info & Form |
| Footer | 748-778 | Social & Copyright |

---

## Testing Your Changes

After making changes:
1. Save the file (Ctrl+S)
2. The browser should auto-refresh
3. Check for any red errors in the browser console
4. Test all interactions (hover, click, scroll)

---

## Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Make sure all quotes are matching
3. Ensure no text is left incomplete
4. Search for the error message online

Happy customizing! 🎉
