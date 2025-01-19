import {tv} from 'tailwind-variants'

export const baseButton = tv({
    base: 'bg-camel text-white mt-5 py-1 px-2 border border-deepgreen text-base' +
        ' cursor-pointer hover:text-white hover:bg-deepgreen hover:border-transparent' +
        ' text-center relative align-middle inline-flex items-center justify-center' +
        ' rounded-md',
    variants: {
        size: {
            lg: 'text-base py-3 px-6',
            xs: 'text-xs py-1 px-2',
            md: 'text-sm py-2 px-4',
            xl: 'text-lg py-4 px-8',
            xxl: 'text-xl py-5 px-10',
            square_xs: 'text-xs h-4 w-4 p-1',
            square_sm: 'text-sm h-6 w-6 p-1',
            square_md: 'text-base h-8 w-8 p-1',
            square_lg: 'text-lg h-10 w-10 p-1',
            square_xl: 'text-xl h-12 w-12 p-1',
        },
        vPadding: {
            xs: 'py-[4px]',
            sm: 'py-[8px]',
            md: 'py-[12px]',
            lg: 'py-[16px]',
        },
        vSpace: {
            xs: 'my-1',
            sm: 'my-2',
            md: 'my-4',
            lg: 'my-6',
        },
        HSpace: {
            xs: 'mx-1',
            sm: 'mx-2',
            md: 'mx-4',
            lg: 'mx-6',
        },
        align: {
            center: 'mx-auto',
            right: 'ml-auto',
            left: 'mr-auto',
            top: 'mb-auto',
            bottom: 'mt-auto',
        },
        behavior: {
            block: 'w-full',
        },
    }
});

// solid button
export const clickedButton = tv({
    extend: baseButton,
    base: 'bg-camel text-white border-camel'+
        ' hover:text-black hover:bg-transparent hover:border-camel'
});

// see through button
export const secButton = tv({
    extend: baseButton,
    base: 'bg-shadow border border-shadow text-black' +
        ' hover:text-black hover:bg-transparent hover:border-camel'
});