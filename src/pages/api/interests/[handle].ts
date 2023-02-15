// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  interests: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const handle = req.query.handle as string;
  const interests = await get_interests_from_top_likes(handle);

  res.status(200).json({ interests });
}

async function get_interests_from_top_likes(handle: string): Promise<string[]> {
  console.log("api key", process.env.API_KEY);

  try {
    const { data } = await axios.get(
      `https://api.borg.id/providers/twitter/${handle}/top-likes/`,
      {
        headers: { Authorization: `Token ${process.env.API_KEY}` },
      }
    );

    if (!("events" in data)) {
      return [];
    }
    const result: string[] = [];

    for (const event of data["events"]) {
      if ("rankings" in event && event["rankings"]) {
        result.push(...event["rankings"].map((r: any) => r["community"]));
      }
    }

    return result;
  } catch (error) {
    console.log("api error", error);
    return [];
  }
}
