import { Logo, NavLink } from 'src/shared/';
import { getRouteOrderServicePage } from 'src/entry';

import styles from './style.module.scss';
import cn from 'clsx';

/**
 * Шапка сайта
 * */
export const Header = () => (
	<header className={styles.header}>
		<div className={cn(styles.header__body, 'container')}>
			<Logo />

			<nav className={styles.header__nav}>
				<NavLink href={getRouteOrderServicePage()}>
					Заказать услуги
				</NavLink>
			</nav>
		</div>
	</header>
);
