// Hero == Banner Background image

import React from "react";

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      {/* passing "hero" as a prop we can change the className of header dynamically */}
      {children}
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
