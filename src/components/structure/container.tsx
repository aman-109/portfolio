
import React, {ReactNode} from 'react';
import Spacing from '../utils/spacing';
import styles from '../../styles/scss/structure/container.module.scss';

interface ContainerProps {
	classProp?: string;
	spacing: string[];
	children: ReactNode;
	className?:string;
}

const Container: React.FC<ContainerProps> = ({ classProp, spacing, children, className }) => {
	const _class = classProp ? classProp : '';

	console.log("classname",className)
	return (
		<div className={`${styles.readingWidth} ${_class} ${Spacing(spacing)} ${className}`}>
			{children}
		</div>
	);
};

export default Container;
