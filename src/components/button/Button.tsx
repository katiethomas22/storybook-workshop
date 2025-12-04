import "./Button.css";

export interface ButtonProps {
    label: string;         //button text
    onClick?: () => void   //optional callback
    severity?: "low" | "medium" | "high";
}

export const Button = ({
    label,
    onClick = () => alert("Button clicked with default callback!"),
    severity = "low",
    ...rest
}: ButtonProps) => {
    const color = severity === "low" ? "lightgreen" : severity === "medium" ? "orange" : "red";
    return (
        <button onClick={onClick} className="button" {...rest}
            style={{ backgroundColor: color }}
        >
            {label}
        </button >
    );
}
