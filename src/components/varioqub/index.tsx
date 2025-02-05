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
  React.useEffect(() => {
    if (experiments && _ymab_param) {
      setVarioqubCookieClient(_ymab_param);

      // @ts-expect-error TODO: протипизировать яндекс метрику позже
      window?.ym?.(YM_COUNTER_NUMBER, "experiments", experiments);

      // @ts-expect-error TODO: протипизировать яндекс метрику позже
      if (window?.ym) {
        console.log("a");
      } else {
        document.documentElement.addEventListener(`yacounter${YM_COUNTER_NUMBER}inited`, () =>
          console.log("hello"),
        );
      }
    }
  }, [experiments, _ymab_param]);

  return <></>;
};
