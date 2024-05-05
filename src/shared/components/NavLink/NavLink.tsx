import { useRouter } from 'next/router';
import { HTMLAttributes } from 'react';
import styles from './style.module.scss';

interface INavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
}

/**
 * Ссылка для навигации по сайту
 * */
export const NavLink = ({ href, ...props }: INavLinkProps) => {
    return <a href={href} className={styles['nav-link']} {...props} />;
};
