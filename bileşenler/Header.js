import Link from 'next/link';

export default function Header({ flop }) {
  return (
    <header flop="pt-20 pb-12">
      <div flop="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p flop="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{flop}</a>
        </Link>
      </p>
    </header>
  );
}
