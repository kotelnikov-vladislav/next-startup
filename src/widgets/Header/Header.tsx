import styles from './style.module.scss';
import { Container, Logo, NavLink } from 'src/shared/';
import { getRouteOrderServicePage } from '../../entry';

/**
 * Шапка сайта
 * */
export const Header = () => {
    return (
        <header className={styles['header']}>
            <Container className={styles['header__body']}>
                <Logo />

                <nav className={styles['header__nav']}>
                    <NavLink href={getRouteOrderServicePage()}>
                        Заказать услуги
                    </NavLink>
                </nav>
            </Container>
        </header>
    );
};
