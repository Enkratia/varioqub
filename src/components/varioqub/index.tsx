"use client";

import React from "react";

import { setVarioqubCookieClient } from "../../utils/cusotmFunctions/setVarioqubCookieClient";

const YM_COUNTER_NUMBER = 97936289;

// **
type VarioqubProps = {
  experiments: string;
  _ymab_param: string;
};

export const Varioqub: React.FC<VarioqubProps> = ({ experiments, _ymab_param }) => {
  // const pathname = usePathname();

  React.useEffect(() => {
    if (experiments && _ymab_param) {
      setVarioqubCookieClient(_ymab_param);

      // @ts-expect-error TODO: протипизировать яндекс метрику позже
      window?.ym?.(YM_COUNTER_NUMBER, "experiments", experiments);
    }
  }, []);

  return <></>;
};
