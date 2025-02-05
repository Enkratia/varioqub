import { cookies } from "next/headers";

import s from "./page.module.css";

const YM_COUNTER_NUMBER = 97936289;
const YM_PAGE_URL = 97936289;

export default async function Home() {
  const i = (await cookies()).get("_ymab_param") || "";

  const res = await fetch(
    `https://uaas.yandex.ru/v1/exps/?client_id=metrika.${YM_COUNTER_NUMBER}&url=${YM_PAGE_URL}&i=${i}`,
  );

  const data = await res.json();

  console.log("data", data);

  return <div className={s.div}></div>;
}
