import { BaseScreen } from 'src/shared';
import { VerticalCard } from 'src/shared/components/VericalCard';
import { PARTNERS } from '../model/const/partners.const';
import styles from './styles.module.scss';

/**
 * Экран партнеров
 * */
export const PartnersScreen = () => {
	return (
		<BaseScreen
			title={'Партнеры'}
			subtitle={
				'Партнеры предоставляют стартапу финансовые ресуры, техническое оснащение, компонетную базу'
			}
			body={
				<ul className={styles.partners}>
					{PARTNERS.map(({ title, imageName, link }) => (
						<li key={title} className={styles.partners__partner}>
							<VerticalCard
								link={link}
								title={title}
								imageUrl={imageName}
							/>
						</li>
					))}
				</ul>
			}
		/>
	);
};
