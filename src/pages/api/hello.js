// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useRouter } from "next/router";

export default async function handler(req, res) {
  const api_key = "7c91776fb1267161889e298c3e7ceb4b";
  const posts = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&units=Metric&appid=${api_key}`
  );
  //
  const post = await posts.json();

  res.status(200).json(post);
}
