import React from "react";
import { NavigationButtonProps } from "../utils/types";

const NavigationButton = ({
  onPrev,
  onSubmit,
  nextLabel,
}: NavigationButtonProps) => {
  return (
    <div className="w-full flex justify-end gap-x-5">
      {onPrev && (
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="button"
          onClick={onPrev}
        >
          Back
        </button>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
        onClick={onSubmit}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default NavigationButton;
