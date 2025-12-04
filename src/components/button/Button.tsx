
export interface ButtonProps {
    label: string;         //button text
    onClick?: () => void   //optional callback
}

export const Button = ({
    label,
    onClick = () => alert("Button clicked with default callback!"),
    ...rest
}: ButtonProps) => {
    return (
        <button onClick={onClick}  {...rest}>
            {label}
        </button >
    );
}
