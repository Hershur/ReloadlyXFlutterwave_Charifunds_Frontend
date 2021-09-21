
type ButtonProps = {
    text: string | JSX.Element;
    textStyle: object;
};

const Button = ({text, textStyle}: ButtonProps): JSX.Element  => {
    return <button style={textStyle}>{text}</button>
}

export default Button;