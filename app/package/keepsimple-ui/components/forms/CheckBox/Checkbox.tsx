import React, { useRef } from "react";

interface CheckboxProps {
    label: string;
    name?: string;
    id?: string;
    className?: string;
    required?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (props.onChange && checkboxRef.current) {
            props.onChange(checkboxRef.current.checked)
        }
    }

    return (
        <div className="form-checkbox">
            <input
                ref={checkboxRef}
                type="checkbox"
                id={props.id}
                name={props.name}
                className={`form-checkbox-input ${props.className ?? ''}`}
                disabled={props.disabled}
                required={props.required}
                defaultChecked={props.defaultChecked}
                checked={props.checked}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor={props.id}>
                <span className="form-checkbox-indicator"></span> {props.label}
            </label>
        </div>
    )
}

export default Checkbox;