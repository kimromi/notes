import Link from 'next/link';
import { Button } from '../components/Button';
import styles from './index.module.css';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div>
        <Button color='primary' />
        <Button color='secondary' />
      </div>
      <Link href='/input'>input</Link>
    </div>
  );
}
