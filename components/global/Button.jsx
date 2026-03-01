import React from "react";
import Link from "next/link";

export default function Button({ children, href = "#", bgColor = "#3399FF", className = "" }) {
  return (
    <Link href={href}>
      <div className="relative inline-block cursor-pointer">
        {/* Main button */}
        <button
          style={{ backgroundColor: bgColor }}
          className={`relative px-4 py-2 text-white border border-black font-medium text-sm md:text-base ${className}`}
        >
          {children}
        </button>
      </div>
    </Link>
  );
}