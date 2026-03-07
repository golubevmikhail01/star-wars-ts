interface ButtonProps {
    text: string;
    tailwindcssAdditions?: string;
    onClick?: () => void;
}

const Button = ({text, tailwindcssAdditions, onClick}: ButtonProps) => {
    return (
        <button
            className={`bg-danger rounded-md px-3 border cursor-pointer 
            hover:bg-red-500 hover:text-white text-center ${tailwindcssAdditions || ''}`}
            onClick={onClick}>
            {text}
        </button>

    );
};

export default Button;