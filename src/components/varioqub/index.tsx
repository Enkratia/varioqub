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
  React.useLayoutEffect(() => {
    if (experiments && _ymab_param) {
      setVarioqubCookieClient(_ymab_param);

      // **
      const initVarioqub = () => {
        // @ts-expect-error TODO: протипизировать яндекс метрику позже
        window?.ym?.(YM_COUNTER_NUMBER, "experiments", experiments);

        document.removeEventListener(`yacounter${YM_COUNTER_NUMBER}inited`, initVarioqub);
        console.log("1");
      };

      // **
      document.addEventListener(`yacounter${YM_COUNTER_NUMBER}inited`, initVarioqub);

      // **
      // @ts-expect-error TODO: протипизировать яндекс метрику позже
      if (window?.ym) {
        initVarioqub();
        console.log("2");
      }
    }
  }, [experiments, _ymab_param]);

  return <></>;
};
