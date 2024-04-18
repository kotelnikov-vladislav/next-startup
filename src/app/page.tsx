import { Typography } from 'src/shared';

/**
 * Главная страница
 * */
export default function Home() {
    return (
        <div>
            <hr />
            <p>light</p>
            <Typography tag={'h1'}>Заголовок первого уровня</Typography>
            <Typography tag={'h2'}>Заголовок второго уровня</Typography>
            <Typography tag={'h3'}>Заголовок третьего уровня</Typography>
            <Typography tag={'h4'}>Заголовок четвертого уровня</Typography>
            <Typography tag={'h5'}>Заголовок пятого уровня</Typography>
            <Typography tag={'h6'}>Заголовок шестого уровня</Typography>
            <Typography tag={'p'}>Параграф</Typography>
            <Typography tag={'span'}>Параграф</Typography>
            <hr />

            <hr />
            <p>darkened</p>
            <Typography tag={'h1'} color={'darkened'}>
                Заголовок первого уровня
            </Typography>
            <Typography tag={'h2'} color={'darkened'}>
                Заголовок второго уровня
            </Typography>
            <Typography tag={'h3'} color={'darkened'}>
                Заголовок третьего уровня
            </Typography>
            <Typography tag={'h4'} color={'darkened'}>
                Заголовок четвертого уровня
            </Typography>
            <Typography tag={'h5'} color={'darkened'}>
                Заголовок пятого уровня
            </Typography>
            <Typography tag={'h6'} color={'darkened'}>
                Заголовок шестого уровня
            </Typography>
            <Typography tag={'p'} color={'darkened'}>
                Параграф
            </Typography>
            <hr />

            <hr />
            <p>muted</p>
            <Typography tag={'h1'} color={'muted'}>
                Заголовок первого уровня
            </Typography>
            <Typography tag={'h2'} color={'muted'}>
                Заголовок второго уровня
            </Typography>
            <Typography tag={'h3'} color={'muted'}>
                Заголовок третьего уровня
            </Typography>
            <Typography tag={'h4'} color={'muted'}>
                Заголовок четвертого уровня
            </Typography>
            <Typography tag={'h5'} color={'muted'}>
                Заголовок пятого уровня
            </Typography>
            <Typography tag={'h6'} color={'muted'}>
                Заголовок шестого уровня
            </Typography>
            <Typography tag={'p'} color={'muted'}>
                Параграф
            </Typography>
            <hr />
        </div>
    );
}
