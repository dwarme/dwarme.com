import React, { HTMLInputTypeAttribute, useCallback, useMemo, useState } from "react";
import { debounce } from "../../../utils/form-util";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    label: string;
    name?: string;
    id?: string;
    className?: string;
    defaultValue?: string;
    value?: string;
    required?: boolean;
    onChange?: (value: string) => void;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    error?: boolean;
    message?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const [textEntered, setTextEntered] = useState<string>(props.defaultValue || '')

    const inputChangeHandle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim();
        setTextEntered(text)
        if (props.onChange) props.onChange(text)
    }, [props])

    const debounceInput = useMemo(() => debounce(inputChangeHandle, 300), [inputChangeHandle])

    const inputClassName = `${textEntered?.length > 0 ? 'form-textbox-entered' : ''}`;
    return (
        <div className={`form-textbox ${props.error ? ' is-error' : ''}`}>
            <input
                type={props.type}
                name={props.name}
                className={`form-textbox-input ${inputClassName}`}
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={(event) => debounceInput(event)}
                disabled={props.disabled}
                required={props.required}
                autoCapitalize={'off'}
                autoComplete={'off'}
                autoCorrect={'off'}
                spellCheck={'false'}
                minLength={props.minLength}
                maxLength={props.maxLength}
            />

            <span className="form-textbox-label">{props.label}</span>

            {props.error && props.message &&
                <div className="form-message-wrapper">
                    <span className="form-message">{props.message}</span>
                </div>
            }
        </div>
    )
}

export default Input;