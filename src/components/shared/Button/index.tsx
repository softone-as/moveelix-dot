import { Button } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    width?: string | number;
    type?: 'button' | 'submit' | 'reset' | undefined;
    rounded?: 'lg' | ' md';
    my?: string | number;
    mt?: string | number;
    mb?: string | number;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({
    variant,
    children,
    ...props
}) => {
    return (
        <Button
            {...(variant === 'primary' && {
                bgColor: '#fd0181',
                color: 'white',
                _hover: { bgColor: '#7e27c8' },
            })}
            {...(variant === 'secondary' && {
                color: '#7e27c8',
                border: '1px',
                borderColor: '#fd0181',
                _hover: { borderColor: '#7e27c8', color: '#fd0181' },
                bgColor: 'transparent',
            })}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonComponent;
