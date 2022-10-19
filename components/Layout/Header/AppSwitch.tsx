import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AppSwitch() {
  const router = useRouter();

  const isSalaries = router.pathname.includes('/salaries');

  const isVesting = router.pathname === '/' || router.pathname === '/create';

  return (
    <span className="nav-button hidden items-center justify-between gap-3 py-1 px-1 lg:flex">
      <Link href="/salaries" passHref>
        <a className={classNames('flex-1 py-1 px-3', isSalaries && activeClasses)}>Salaries</a>
      </Link>
      <Link href="/" passHref>
        <a className={classNames('flex-1 py-1 px-3', isVesting && activeClasses)}>Vesting</a>
      </Link>
    </span>
  );
}

const activeClasses = 'rounded-[10px] bg-lp-primary text-lp-white dark:text-lp-black';
