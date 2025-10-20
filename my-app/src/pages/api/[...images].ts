import type { NextApiRequest, NextApiResponse } from 'next'

import fs from "fs";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // AncientApparition_0e1a82d2-cff9-4d30-bda6-241d6a956bd7.png
  //console.log("request");
  //const imagePath = req.query.slug.join("/");
  const { images } = req.query
  //console.log(images);
  res.setHeader("Content-Type", "image/jpg");
  try {
    const filePath = path.resolve(".", `src/public/img/ai/${images[1]}`);
    const imageBuffer = fs.readFileSync(filePath);
    //res.setHeader("Content-Type", "image/jpg");
    return res.send(imageBuffer);
  } catch (error) {
    const filePath = path.resolve(".", `src/public/img/ai/AncientApparition_0e1a82d2-cff9-4d30-bda6-241d6a956bd7.png`);
    const imageBuffer = fs.readFileSync(filePath);
    //res.setHeader("Content-Type", "image/jpg");
    return res.send(imageBuffer); 
  }
  
  //return res.send( "text");
}