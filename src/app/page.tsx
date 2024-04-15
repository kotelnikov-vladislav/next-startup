import Link from 'next/link';
import {
    getRouteMainPage,
    getRouteOrderEquipmentPage,
    getRouteOrderServicePage,
} from 'src/shared';

/**
 * Главная страница
 * */
export default function Home() {
    return (
        <div>
            <h1>Hello Next.js</h1>
            <Link href={getRouteMainPage()}>Главная</Link>
            <Link href={getRouteOrderServicePage()}>Заказ услуги</Link>
            <Link href={getRouteOrderEquipmentPage()}>Заказ техники</Link>
        </div>
    );
}
