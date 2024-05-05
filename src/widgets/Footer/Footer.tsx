import styles from './style.module.scss';
import { Container, Typography } from 'src/shared';

/**
 * Подвал сайта
 * */
export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <Container>
                <Typography tag={'span'} color={'muted'}>
                    Copyright by 2023 ООО “ЕГОР”
                </Typography>
            </Container>
        </footer>
    );
};
