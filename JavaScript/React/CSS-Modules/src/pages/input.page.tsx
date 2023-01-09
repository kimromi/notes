import Link from 'next/link';
import { Input } from '../components/Input';

export default function InputPage() {
  return (
    <>
      <div>
        <Input />
      </div>
      <Link href='/'>top</Link>
    </>
  );
}
