import React, { useImperativeHandle, useRef, useId } from 'react';

const Select = React.forwardRef(({ options, label, className, ...props }, ref) => {
    const selectRef = useRef(null);
    const id = useId();

    // Expose selectRef to parent components using forwardRef
    useImperativeHandle(ref, () => ({
        focus: () => {
            selectRef.current.focus();
        },
        // You can add more imperative methods here as needed
    }));

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="inline-block mb-1 pl-1 text-sm font-semibold text-gray-700">
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={selectRef}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;