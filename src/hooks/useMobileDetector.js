import { useEffect, useState } from "react";

const mobileUserAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof navigator === "undefined" || typeof window === "undefined") return false;
    const userAgent = navigator.userAgent || "";
    const isMobileUserAgent = mobileUserAgentRegex.test(userAgent) || (navigator.userAgentData?.mobile ?? false);
    const isSmallScreen = window.matchMedia("(max-width: 820px)").matches || window.matchMedia("(max-device-width: 820px)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;

    return isMobileUserAgent || isSmallScreen || isCoarsePointer || hasTouch;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const detectMobile = () => {
      const userAgent = navigator.userAgent || "";
      const isMobileUserAgent = mobileUserAgentRegex.test(userAgent) || (navigator.userAgentData?.mobile ?? false);
      const isSmallScreen = window.matchMedia("(max-width: 820px)").matches || window.matchMedia("(max-device-width: 820px)").matches;
      const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;

      setIsMobile(isMobileUserAgent || isSmallScreen || isCoarsePointer || hasTouch);
    };

    detectMobile();
    window.addEventListener("resize", detectMobile);

    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  return isMobile;
}
