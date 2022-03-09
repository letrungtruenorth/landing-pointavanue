import styles from './index.module.scss';

type IBoxHoverProps = {
  text: string;
};

const BoxHover = (props: IBoxHoverProps) => (
  <span className={styles.button}>{props.text}</span>
);

export { BoxHover };
