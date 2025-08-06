import React from 'react';

interface ButtonProps {
  id?: string;
  type?: 'button' | 'submit';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  label: string;

}

export default function Button({
  id,
  type = 'button',
  onClick,
  name,
  label,
}: ButtonProps) {
  return (
    <button
      id={id}
      name={name}
      type={type}
      onClick={onClick}
      className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
    >
      {label}
    </button>
  );
}
