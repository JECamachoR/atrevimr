import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgAtreviSavingsLogo(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.496 38.504c-.934 2.45.246 5.21 2.635 6.168 2.39.957 5.085-.252 6.019-2.701l.213-.56a18.474 18.474 0 01-8.654-3.465l-.213.558zm21.97-31.448a18.531 18.531 0 00-4.113-2.294 18.25 18.25 0 00-4.54-1.174l.213-.559C21.96.58 24.655-.629 27.045.328c2.39.957 3.57 3.719 2.635 6.168l-.213.56z"
        fill="#1A224C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.737 4.921a16.762 16.762 0 00-.384-.159C15.794.933 5.017 5.77 1.28 15.567c-3.65 9.572.773 20.338 9.896 24.397a18.313 18.313 0 005.187 1.447L29.466 7.056a18.529 18.529 0 00-3.729-2.135z"
        fill="#FC0"
      />
      <Path
        d="M23.99 21.414l-3.56 9.334c-1.471.446-3.008.564-4.126.285-.226-.05-.354-.17-.335-.305l.074-3.604c-.027-.241.097-.372.314-.343 1.225.108 2.58-.019 3.423-.321.688-.31 1.003-.83.794-1.32-.183-.428-1.008-.385-2.093-.33-2.085.109-5.132.266-6.434-2.78-1.072-2.508-.136-5.055 2.353-6.603l-.381-.892c-.073-.17-.008-.377.164-.454l1.333-.598a.336.336 0 01.458.174l.373.871c1.426-.437 3.145-.55 4.58-.308.218.029.355.17.336.305l-.074 3.604c.027.241-.096.372-.314.343-1.307-.122-2.723-.018-3.502.255-.667.3-.97.79-.77 1.257.183.428 1.007.382 2.093.322 1.601-.09 3.771-.21 5.294 1.108z"
        fill="#1A224C"
      />
    </Svg>
  );
}

export default SvgAtreviSavingsLogo;
