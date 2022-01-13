import dbConnect from "../../../db/dbconnect";
import Hero from "../../../models/Hero";

dbConnect();

// get, edit or delete a specific records

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);

        if (!hero) {
          res.status(404).json({ success: false });
        }

        res
          .status(200)
          .json({
            success: true,
            hero: hero,
            message: "Fetched superhero with given ID",
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!hero) {
          res.status(400).json({ success: false });
        }

        res
          .status(200)
          .json({
            success: true,
            hero: hero,
            message: "Updated superhero with given ID",
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const hero = await Hero.deleteOne({ _id: id });

        if (!hero) {
          res.status(404).json({ success: false });
        }

        res
          .status(200)
          .json({ success: true, message: "Deleted superhero with given ID" });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
