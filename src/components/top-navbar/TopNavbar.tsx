'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
import GithubIcon from '../svg-components/GithubIcon';
import classNames from 'classnames';
import LinkIcon from '../LinkIcon';
import ThemeToggleButton from '../ThemeToggleButton';
import BurgerMenu from '../svg-components/BurgerMenu';
import Image from 'next/image';
import icon from '@/app/icon.png';

type Props = Readonly<{
    className?: string,
}>;

const TopNavbar = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const rootRoute = pathname.split('/')[1];

    return (
        <header className={classNames(
            'flex flex-col px-12 py-6 text-xl font-semibold w-screen z-50 fixed top-0 left-0',
            'border-b dark:bg-black bg-gray-300 dark:border-gray-600 border-gray-300',
            'bg-opacity-20 dark:bg-opacity-20 backdrop-blur-md dark:backdrop-blur-md',
            'min-w-80 max-sm:px-8',
            className
        )}>
            <div className='flex justify-between'>
                <Link
                    href='/'
                    className='hover:underline cursor-pointer flex gap-2 items-center'
                >
                    <Image
                        src={icon}
                        alt='cat_with_sunglasses'
                        width={64}
                        height={64}
                        className='w-6 h-6 rounded-full'
                        priority
                    />
                    <div>Eric Tang&nbsp;</div>
                </Link>
                <div className='flex gap-8 items-center max-lg:gap-4'>
                    <div className='flex gap-6 items-center max-lg:hidden'>
                        <NavbarLink
                            href='/'
                            isActive={rootRoute === ''}
                        >
                            Home
                        </NavbarLink>
                        <NavbarLink
                            href='/about'
                            isActive={rootRoute === 'about'}
                        >
                            About
                        </NavbarLink>
                        <NavbarLink
                            href='/work'
                            isActive={rootRoute === 'work'}
                        >
                            Work
                        </NavbarLink>
                        <NavbarLink
                            href='/projects'
                            isActive={rootRoute === 'projects'}
                        >
                            Projects
                        </NavbarLink>
                    </div>
                    <button 
                        className='hidden max-lg:block'
                    >
                        <BurgerMenu className='w-[1.4em] h-[1.4em] stroke-[var(--text-secondary)] hover:stroke-[var(--secondary)]' />
                    </button>
                    <div className='flex gap-4 items-center'>
                        <ThemeToggleButton className='w-[1.2em] h-[1.2em]' />
                        <LinkIcon
                            href='https://github.com/etan675'
                            target='_blank'
                        >
                            <GithubIcon className='w-[1.2em] h-[1.2em] dark:fill-[#939393] fill-black' />
                        </LinkIcon>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default TopNavbar;