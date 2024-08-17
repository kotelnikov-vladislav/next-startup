export type TScrollable = 'left' | 'right' | 'both' | 'none';

export class DomHelper {
	/** Проверяет, есть ли у элемента горизотальный скролл */
	public static checkIsScrollable(elem: HTMLElement): TScrollable {
		const { scrollWidth, clientWidth, scrollLeft } = elem;

		if (scrollWidth <= clientWidth) {
			return 'none';
		}

		if (scrollLeft > 0 && scrollLeft < scrollWidth - clientWidth) {
			return 'both';
		}

		if (scrollLeft > 0) {
			return 'left';
		}

		return 'right';
	}
}
