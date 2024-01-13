import { NextApiRequest, NextApiResponse } from "next";
import client from "src/libs/server/client";
import withHandler from "src/libs/server/withHandler";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log("found it.");
  //   if (!user) {
  //     console.log("Did not find. Will create.");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);

/* 
---> phone # ---> User?

---> Token---User #무작위 번호

---> #무작위 번호 ---> SMS ---> phone # (Twilio)

---> #무작위 번호 ---> Token?---User ---> Log the user In

*/
