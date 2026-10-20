import type { ReactNode } from 'react';
export default function Button({ children, href, outline = false, className = '' }: {
    children: ReactNode;
    href?: string;
    outline?: boolean;
    className?: string;
}) {
    const classes = `button ${outline ? 'button-outline' : 'button-gold'} ${className}`;
    return href ? <a href={href} className={classes}>{children}</a> : <button type="button" className={classes}>{children}</button>;
}
