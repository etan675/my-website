import classNames from 'classnames';
import React from 'react';
import JSIcon from '../svg-components/JSIcon';
import TSIcon from '../svg-components/TSIcon';
import CSSIcon from '../svg-components/CSSIcon';
import TailwindIcon from '../svg-components/TailwindIcon';
import ReactIcon from '../svg-components/ReactIcon';
import NodeIcon from '../svg-components/NodeIcon';
import NextJSIcon from '../svg-components/NextJSIcon';
import PHPIcon from '../svg-components/PHPIcon';
import LaravelIcon from '../svg-components/LaravelIcon';
import JSONIcon from '../svg-components/JSONIcon';
import GraphQLIcon from '../svg-components/GraphQLIcon';
import MySQLIcon from '../svg-components/MySQLIcon';

type Props = Readonly<{
    className?: string,
    type: keyof typeof tools
}>;

// TODO: quick popup desc on hover
const Tool = ({ className = '', type }: Props) => {
    return (
        <div className={classNames(
            'flex items-center gap-2 px-3 py-4 bg-slate-900 rounded-md',
            '[&>svg]:w-8 [&>svg]:h-8 [&>svg]:flex-shrink-0',
            'cursor-pointer border border-transparent hover:border-[var(--secondary)] transition-all',
            className
        )}>
            {tools[type].icon}
            <div className='whitespace-nowrap'>{tools[type].name}</div>
        </div>
    )
};

const tools = {
    JS: {
        name: 'JavaScript (ES6)',
        icon: <JSIcon/>
    },
    TS: {
        name: 'TypeScript',
        icon: <TSIcon/>
    },
    PHP: {
        name: 'PHP (7+)',
        icon: <PHPIcon className='scale-125' />
    },
    REACT: {
        name: 'React',
        icon: <ReactIcon/>
    },
    NODE: {
        name: 'Node.js',
        icon: <NodeIcon className='bg-[#dedede] rounded px-[2px]' />
    },
    NEXT_JS: {
        name: 'Next.js',
        icon: <NextJSIcon />
    }, 
    CSS: {
        name: 'CSS/SCSS',
        icon: <CSSIcon/>
    },
    TW: {
        name: 'Tailwind',
        icon: <TailwindIcon/>
    },
    LARAVEL: {
        name: 'Laravel',
        icon: <LaravelIcon className='scale-90' />
    },
    GQL: {
        name: 'Apollo GraphQL',
        icon: <GraphQLIcon/>
    },
    REST: {
        name: 'REST APIs',
        icon: <JSONIcon className='scale-[0.85] fill-current' />
    },
    MY_SQL: {
        name: 'MySQL',
        icon: <MySQLIcon/>
    },
}

export default Tool;