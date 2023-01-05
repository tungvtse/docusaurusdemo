import React from "react";

export default function Wrapper({ children, width, display, flexWrap }) {
  return <div
    style={{
      flexWrap: flexWrap,
      display: display,
      borderRadius: '2px',
      width: width,
      padding: '0.2rem',

    }}>
    {children}
  </div>
}
