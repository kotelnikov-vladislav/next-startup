import styles from './style.module.scss';
import { Container, Logo, Typography } from 'src/shared/';
import { NavLink } from 'src/shared/components/NavLink/NavLink';
import {
    getRouteOrderEquipmentPage,
    getRouteOrderServicePage,
} from 'src/entry';

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
                    <NavLink href={getRouteOrderEquipmentPage()}>
                        Заказать технику
                    </NavLink>
                </nav>
            </Container>
        </header>
    );
};
