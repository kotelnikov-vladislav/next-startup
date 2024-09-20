interface ITEAM {
	title: string;
	imageUrl: string;
	description: string;
	socNetwork: {
		vk?: string;
		tg?: string;
	};
}

export const TEAM: ITEAM[] = [
	{
		title: 'Сироткин Егор Сергеевич',
		imageUrl: '/images/avatars/sirotkin.png',
		description: 'Основатель проекта',
		socNetwork: {
			vk: 'https://vk.com/id251487245',
		},
	},
	{
		title: 'Козлов Андрей Николаевич',
		imageUrl: '/images/avatars/kozlov.png',
		description: 'Заведующий лабораторией цифровых технологий ВГАТУ',
		socNetwork: {
			vk: 'https://vk.com/eremey59',
			tg: 'https://t.me/Ingener59',
		},
	},
	{
		title: 'Вылегжанин Павел Николаевич',
		imageUrl: '/images/avatars/vylegzhanin.png',
		description: 'Декан инженерного факультета ВГАТУ',
		socNetwork: {
			vk: 'https://vk.com/id16937498',
			tg: 'https://t.me/pavelvgatu',
		},
	},
];
