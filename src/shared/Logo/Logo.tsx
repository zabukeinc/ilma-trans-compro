import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo_ilmatrans.png";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? 
      (
        <img
          className={`block max-h-14 ${imgLight ? "dark:hidden" : ""}`}
          style={{ maxWidth: "150px" }}
          src={img}
          alt="Logo"
        />
      )
       : (
        "Ilma Trans"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
