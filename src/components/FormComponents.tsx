import React, { forwardRef, InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
}

interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, name, type, disabled, ...props }, ref) => {
    return (
      <input
        id={name}
        name={name}
        type={type ?? "text"}
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ name, ...props }, ref) => {
    return (
      <input
        id={name}
        name={name}
        type="number"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        ref={ref}
        {...props}
      />
    );
  }
);

export const Label = ({
  htmlFor,
  label,
  required,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
}) => {
  return (
    <label htmlFor={htmlFor}>
      {label} {required && <span className="text-red-600">*</span>}
    </label>
  );
};

export const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return <span className="text-red-600">{errorMessage}</span>;
};
