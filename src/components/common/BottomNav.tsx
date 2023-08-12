import Link from 'next/link';

import HomeIcon from '@/assets/icons/home.svg';
import MyIcon from '@/assets/icons/my.svg';
import WriteIcon from '@/assets/icons/write.svg';

export default function BottomNav() {
  return (
    <div
      className="w-full h-20 px-16 flex bg-white justify-between py-6  bottom-0 z-10 fixed max-w-[393px]"
      style={{
        boxShadow: '0 1px 5px 2px rgba(0,0,0,0.2)',
        borderRadius: '50px 50px 0px 0px',
      }}
    >
      <Link
        href="/log"
        className="absolute left-[50%] bg-black rounded-[50%] w-[84px] h-[84px] inline-flex justify-center items-center top-0"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <WriteIcon />
      </Link>
      <Link href="/home">
        <HomeIcon />
      </Link>
      <Link href="/my">
        <MyIcon />
      </Link>
    </div>
  );
}
