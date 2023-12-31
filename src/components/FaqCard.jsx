import React, { useState } from "react";

export default function FaqCard({ title, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-aos="flip-down"
      data-aos-delay="200"
      onClick={() => setOpen(!open)}
      className="border-b pb-4 mb-8"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-base">{title}</h4>
        {!open ? (
          <span className="text-4xl">+</span>
        ) : (
          <span className="text-4xl">-</span>
        )}
      </div>
      {open && (
        <div className="mt-4 w-1/2">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
