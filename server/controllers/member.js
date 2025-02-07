import { Member } from "../models/member.js";
import { getPriority } from "../utils/util.js";

export async function addMember(req, res) {
  const {
    name,
    designation,
    domain,
    linkedin,
    github,
    instagram,
    email,
    phone,
  } = req.body;

  if (
    !name ||
    !designation ||
    !domain ||
    !linkedin ||
    !github ||
    !instagram ||
    !email ||
    !phone
  ) {
    return res.status(400).json({ error: "Missing fields !" });
  }

  const file = req.file;
  console.log(file);

  // {
  //   fieldname: 'image',
  //   originalname: 'img.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: './public/temp',
  //   filename: 'image-1738942345820-14135539',
  //   path: 'public\\temp\\image-1738942345820-14135539',
  //   size: 68272
  // }

  try {
    const member = new Member({
      name,
      image: "",
      designation,
      priority: getPriority(designation),
      domain,
    });

    await member.save();

    return { status: 200 };
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add member" });
  }
}

export async function getMembers(req, res) {
  try {
    const members = await Member.find().sort({ priority: -1 });
    res.status(200).json({
      message: "fetched members successfully",
      members,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch members" });
  }
}
