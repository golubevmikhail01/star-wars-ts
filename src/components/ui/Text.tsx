interface TextProps {
    text: string | null;
}

const Text = ({text}: TextProps) => {
    return (
        <div className={'text-3xl text-justify leading-normal tracking-widest'}>
            {text}
        </div>
    );
};

export default Text;