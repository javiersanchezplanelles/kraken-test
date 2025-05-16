import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='home'>
        <Link href='./product'>Product page here</Link>
      </div>
    </main>
  );
}
