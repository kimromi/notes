import styles from './Button.module.css';

type Props = {
  color: 'primary' | 'secondary';
};

export const Button = ({ color }: Props) => {
  return <button className={styles[color]}>Button</button>;
};
