import { cookies } from "next/headers";

// import s from "./page.module.css";
import { Varioqub } from "../components/varioqub";

const YM_COUNTER_NUMBER = 97936289;
const YM_PAGE_URL = "https://varioqub.vercel.app/";

type VarioqubFlagType = { v: string; t: string; n: string };

type VarioqubType = {
  i: string;
  experiments: string;
  testids: [];
  flags: VarioqubFlagType[];
  formatVersion: number;
};

export default async function Home() {
  const i = (await cookies()).get("_ymab_param")?.value || "";

  const res = await fetch(
    `https://uaas.yandex.ru/v1/exps/?client_id=metrika.${YM_COUNTER_NUMBER}&url=${YM_PAGE_URL}&i=${i}`,
  );

  const data = (await res.json()) as VarioqubType | undefined;

  if (!data) {
    return <></>;
  }

  return (
    <>
      {/* <div
        className={s.div}
        style={{
          background:
            data.flags.find((o: VarioqubFlagType) => o.n === "accumulate_points_vi")?.v === "b"
              ? "red"
              : "",
        }}
        ></div> */}
      <Varioqub _ymab_param={data.i} experiments={data.experiments} />
    </>
  );
}
