import { Button } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    width?: string | number;
    rounded?: 'lg' | ' md';
    my?: string | number;
    icon?: ReactElement;
}

const ButtonComponent: React.FC<ButtonProps> = ({
    variant,
    icon,
    children,
    ...props
}) => {
    return (
        <Button
            {...(variant === 'primary' && primaryProps)}
            {...(variant === 'secondary' && secondaryProps)}
            {...props}
            leftIcon={icon}
        >
            {children}
        </Button>
    );
};

const primaryProps = {
    bgColor: '#fd0181',
    color: 'white',
    _hover: { bgColor: '#7e27c8' },
};

const secondaryProps = {
    color: '#7e27c8',
    border: '1px',
    borderColor: '#fd0181',
    _hover: { borderColor: '#7e27c8', color: '#fd0181' },
    bgColor: 'transparent',
};

export default ButtonComponent;
