import { Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

export type TypographyWithDelay = TypographyProps & {
  delayMs: number;
};
export function TypographyWithDelay({ delayMs, ...typographyProps }: TypographyWithDelay) {
  const [displayItem, setDisplayItem] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayItem(true);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [delayMs]);
  if (displayItem) {
    return <Typography {...typographyProps} />;
  }
  return <></>;
  // sau return null;
}
