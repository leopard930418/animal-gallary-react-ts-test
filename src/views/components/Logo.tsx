import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Logo
      </div>
    </Link>
  );
}
