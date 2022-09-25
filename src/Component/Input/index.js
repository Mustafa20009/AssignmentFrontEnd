import React from "react";

export const Input = React.forwardRef((props, ref) => {
  const { label, style, type, placeholder, errors, ...others } = props;

  return (
    <>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            className="block w-full py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type={type}
            placeholder={placeholder}
            {...others}
            ref={ref}
          />
        </div>
        {errors && (
          <p className="mt-1 text-xs text-red-600" id="email-error">
            {errors.message}
          </p>
        )}
        {/*  */}
      </div>
    </>
  );
});
