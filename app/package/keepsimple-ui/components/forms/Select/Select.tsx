import React, { ReactNode, useRef } from "react";

interface SelectProps {
    children: ReactNode;
    label: string;
    name?: string;
    id?: string;
    className?: string;
    defaultValue?: string;
    value?: string;
    required?: boolean;
    onChange?: (option: HTMLOptionElement) => void;
    disabled?: boolean;
    error?: boolean;
    message?: string;
}

const Select: React.FC<SelectProps> = (props) => {

    const selectRef = useRef<HTMLSelectElement>(null)
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.onChange && selectRef.current) {
            const selectedOption = selectRef.current.options[selectRef.current.options.selectedIndex]
            props.onChange(selectedOption)
        }
    }

    return (
        <div className={`form-dropdown ${props.error ? ' is-error' : ''}`}>
            <select
                ref={selectRef}
                name={props.name}
                className={`form-dropdown-select `}
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={handleSelectChange}
                disabled={props.disabled}
                required={props.required}
                autoCapitalize={'off'}
                autoComplete={'off'}
                autoCorrect={'off'}
                spellCheck={'false'}
            >
                {props.children}
            </select>

            <span className="form-textbox-label">{props.label}</span>

            {props.error && props.message &&
                <div className="form-message-wrapper">
                    <span className="form-message">{props.message}</span>
                </div>
            }
        </div>
    )
}

export default Select;