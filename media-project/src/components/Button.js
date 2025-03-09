import className from 'classnames';
import { GoSync } from 'react-icons/go';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    ...rest
}) {
    const classes = className(
        rest.className,
        'flex items-center px-3 py-1.5 border h-8',
        {
            'opacity-80': loading,
            'border-blue-500 bg-blue-500 test-white': primary,
            'border-gray-500 bg-gray-500 test-white': secondary,
            'border-green-500 bg-green-500 test-white': success,
            'border-yellow-500 bg-yellow-500 test-white': warning,
            'border-red-500 bg-red-500 test-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger,
        }
    );

    return (
        <button {...rest} disabled={loading} className={classes}>
            {loading ? <GoSync className='animate-spin' /> : children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
              'Only one of Primary, secondary, success, warning, danger can be true'  
            );
        }
    },
};

export default Button;