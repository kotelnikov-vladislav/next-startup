import Image from 'next/image';
import styles from './style.module.scss';
import { Typography } from 'src/shared';
import { getRouteMainPage } from '../../../entry';
import Link from 'next/link';

export const Logo = () => {
    return (
        <Link href={getRouteMainPage()} style={{ textDecoration: 'none' }}>
            <div className={styles['logo']}>
                <Image
                    width={40}
                    height={40}
                    src={'/images/commons/logo.png'}
                    alt={'Логотип компании агробота'}
                />
                <Typography tag={'h2'} color={'darkened'}>
                    AgroBot
                </Typography>
            </div>
        </Link>
    );
};
