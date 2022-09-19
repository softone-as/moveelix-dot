import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href = '/' } = props;

    //   const classTitle = cx({
    //     "nav-link": true,
    //     active,
    //   });

    return (
        <li className='nav-item my-auto'>
            <NextLink href={href}>
                <Link className={classTitle} aria-current='page'>
                    {title}
                </Link>
            </NextLink>
        </li>
    );
}
