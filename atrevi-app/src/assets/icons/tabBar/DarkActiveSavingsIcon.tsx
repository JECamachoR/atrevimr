import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgDarkActiveSavingsIcon(props: SvgProps) {
  return (
    <Svg
      width={43}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.373 13.186C1.998 13.186.04 15.153 0 17.582c-.04 2.43 1.853 4.4 4.227 4.4l.544.001a18.097 18.097 0 01.143-8.796h-.542zM38.083 22a18.167 18.167 0 00.617-4.398 17.91 17.91 0 00-.47-4.399h.542c2.375.002 4.267 1.972 4.227 4.4-.04 2.43-1.997 4.398-4.372 4.397h-.543z"
        fill="#343436"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.689 17.994c.005-.127.008-.258.01-.392C38.86 7.885 31.29.005 21.79 0 12.507-.005 4.82 7.513 4.323 16.923c-.09 1.698.06 3.404.449 5.06L38.084 22c.352-1.314.553-2.658.605-4.006z"
        fill="#FC0"
      />
      <Path
        d="M24.161 21.993l-9.05-.005c-.853-1.147-1.448-2.463-1.572-3.542-.03-.217.03-.37.15-.399l3.075-1.145c.196-.104.347-.04.392.162.303 1.116.848 2.268 1.376 2.91.483.504 1.026.607 1.372.258.305-.305.003-1.018-.395-1.956-.764-1.803-1.88-4.438.28-6.61 1.777-1.787 4.235-1.817 6.349-.142l.632-.636c.12-.121.317-.133.438-.007l.936.974a.326.326 0 010 .463l-.617.621c.83 1.111 1.48 2.59 1.738 3.937.046.201-.03.37-.15.398L26.04 18.42c-.196.105-.347.04-.392-.161-.318-1.194-.863-2.408-1.346-3.004-.468-.487-.98-.589-1.312-.256-.303.305.001 1.017.403 1.954.591 1.382 1.393 3.255.768 5.04z"
        fill="#343436"
      />
    </Svg>
  );
}

export default SvgDarkActiveSavingsIcon;
