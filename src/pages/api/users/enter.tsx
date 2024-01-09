import { NextApiRequest, NextApiResponse } from "next";
import client from "src/libs/server/client";
import withHandler from "src/libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("found it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }
  return res.status(200).end();
}

export default withHandler("POST", handler);

/* 
---> phone # ---> User?

---> Token---User #무작위 번호

---> #무작위 번호 ---> SMS ---> phone # (Twilio)

---> #무작위 번호 ---> Token?---User ---> Log the user In

*/
