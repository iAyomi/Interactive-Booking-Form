import React from "react";

export const Header = ({ header }: { header: string }) => {
  return <h3 className="mb-6 font-semibold text-xl text-gray-600">{header}</h3>;
};

export const Paragraph = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <p className="mb-1 font-normal text-xl text-gray-600">
      <strong>{title}:</strong> {paragraph}
    </p>
  );
};
