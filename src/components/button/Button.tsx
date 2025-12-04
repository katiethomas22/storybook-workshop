import "./Button.css"
type Severity = "low" | "medium" | "high";

export interface ButtonProps {
    label: string;         //button text
    onClick?: () => void   //optional callback
    severity: Severity;    //severity level (controls colour)
}

export const Button = ({ label = "Click me!", onClick, severity, ...rest }: ButtonProps) => {
    const color = severity === "low" ? "lightgreen" : severity === "medium" ? "orange" : "red";
    return (
        <button onClick={onClick} className="button" {...rest}
            style={{
                backgroundColor: `${color}`
            }}
        >
            {label}
        </button >
    );
}