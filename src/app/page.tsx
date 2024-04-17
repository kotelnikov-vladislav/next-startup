import Link from 'next/link';
import {
    getRouteMainPage,
    getRouteOrderEquipmentPage,
    getRouteOrderServicePage,
} from 'src/entry';
import { Typography } from 'src/shared';

/**
 * Главная страница
 * */
export default function Home() {
    return (
        <div>
            <Typography tag={'h1'}>Hello Next.js</Typography>
            <Link href={getRouteMainPage()}>
                <Typography tag={'p'}>Главная страница</Typography>
            </Link>
            <Link href={getRouteOrderServicePage()}>
                <Typography tag={'p'}>Заказ услуги</Typography>
            </Link>
            <Link href={getRouteOrderEquipmentPage()}>
                <Typography tag={'p'}>Заказ техники</Typography>
            </Link>
        </div>
    );
}
