import "./Button.css"

export interface ButtonProps {
    label: string;         //button text
    onClick?: () => void   //optional callback
}

export const Button = ({ label = "Click me!", onClick, ...rest }: ButtonProps) => {
    return (
        <button onClick={onClick} className="button" {...rest}
        >
            {label}
        </button >
    );
}