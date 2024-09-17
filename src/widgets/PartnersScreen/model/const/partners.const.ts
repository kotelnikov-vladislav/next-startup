interface IPartner {
	title: string;
	imageName: string;
	link?: string;
}

export const PARTNERS: IPartner[] = [
	{
		title: 'Вятский государственный агротехнологический университет',
		imageName: 'vgatu',
		link: 'https://vgatu.ru/',
	},
	{
		title: 'Торгово-Сервисная Компания (ТСК) «Техника»',
		imageName: 'tsk',
		link: 'https://tsc-t.ru/',
	},
	{
		title: 'Фонд содействия инновациям',
		imageName: 'fsi',
		link: 'https://fasie.ru/',
	},
	{
		title: 'Платформа университетского технологического предпринимательства',
		imageName: 'univertechpred',
		link: 'https://univertechpred.ru/',
	},
];
