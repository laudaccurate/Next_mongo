import dbConnect from "../../../db/dbconnect";
import Hero from "../../../models/Hero";

dbConnect();

// get all records, post a new record

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heroes = await Hero.find({});
        res
          .status(200)
          .json({
            success: true,
            hero: heroes,
            message: "Fetched all superheroes",
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res
          .status(200)
          .json({
            success: true,
            hero: hero,
            message: "Created a new superhero",
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
