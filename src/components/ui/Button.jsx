import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-sky-blue text-white hover:bg-sky-blue/90 shadow-lg',
        secondary: 'bg-fantasy-purple text-white hover:bg-fantasy-purple/90 shadow-lg',
        accent: 'bg-candy-pink text-white hover:bg-candy-pink/90 shadow-lg',
        outline: 'border-2 border-sky-blue text-sky-blue hover:bg-sky-blue/10',
        ghost: 'text-medium-gray hover:text-dark-gray hover:bg-cloud-blue'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(
                'rounded-2xl font-fredoka font-medium transition-colors',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
