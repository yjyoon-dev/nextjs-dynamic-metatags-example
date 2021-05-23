import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import responseData from "../../data/response.json";

const DetailPage = () => {
  const router = useRouter();
  const { id, name, sex, age, address } = router.query;
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta
          property="og:title"
          content={`${name} / ${sex} / ${age}세`}
        ></meta>
        <meta property="og:description" content={address}></meta>
        <meta
          property="og:image"
          content={`http://www.safe182.go.kr/api/lcm/imgView.do?msspsnIdntfccd=${id}`}
        ></meta>
      </Head>
      <p>{name}</p>
      <p>{sex}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  );
};

export default DetailPage;
