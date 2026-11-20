import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/pikft_logo_2.png"
        className="h-9 w-auto object-contain opacity-80"
        alt="Paksi informatika"
      />
    </div>
  );
};

export default Logo;
