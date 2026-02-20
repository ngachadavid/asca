import React from "react";
import Link from "next/link";

export default function Button({ children, href = "#", bgColor = "#3399FF", className = "" }) {
  return (
    <Link href={href}>
      <div className="relative inline-block cursor-pointer">
        {/* Black underlay */}
        <div
          className="absolute top-0 left-0 px-4 py-2"
          style={{ backgroundColor: "#000" }}
        >
          <span className="invisible font-medium text-sm md:text-base">{children}</span>
        </div>

        {/* Main button */}
        <button
          style={{ backgroundColor: bgColor }}
          className={`relative -top-1 -left-1 px-4 py-2 text-white border border-black font-medium text-sm md:text-base transition-transform duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 ${className}`}
        >
          {children}
        </button>
      </div>
    </Link>
  );
}