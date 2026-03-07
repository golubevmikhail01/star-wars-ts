import Button from "./ui/Button.tsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center">
            <Button text={'Send me email'} tailwindcssAdditions={'col-start-3'}/>
        </footer>
    );
};

export default Footer;