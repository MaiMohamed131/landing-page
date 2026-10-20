'use client';
import { useState } from 'react';
import { CalendarDays, Menu, X } from 'lucide-react';
import Button from './ui/Button';
const links = ['Home', 'About', 'Menu', 'Gallery', 'Reservations', 'Contact'];
const targets: Record<string, string> = { Home: '#home', About: '#about', Gallery: '#gallery' };
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return <header className="navbar"><div className="container flex items-center justify-between"><a className="logo" href="#home" aria-label="Savoré home">Savor<span>é</span><small>RESTAURANT</small></a><nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <a key={link} className={link === 'Home' ? 'active' : ''} href={targets[link] ?? '#home'} aria-current={link === 'Home' ? 'page' : undefined}>{link}</a>)}</nav><div className="flex items-center gap-4"><Button className="nav-book"><CalendarDays size={19}/>Book a Table</Button><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link} href={targets[link] ?? '#home'} onClick={() => setOpen(false)}>{link}</a>)}</nav>}</header>;
}
