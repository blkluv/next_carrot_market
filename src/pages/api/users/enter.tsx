import { NextApiRequest, NextApiResponse } from "next";
import client from "src/libs/server/client";
import withHandler, { ResponseType } from "src/libs/server/withHandler";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
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
