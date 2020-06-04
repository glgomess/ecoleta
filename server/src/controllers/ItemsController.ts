import knex from "../database/connection";
import { Request, Response } from "express";

class ItemsController {
  index = async (request: Request, response: Response) => {
    const items = await knex("items").select("*");

    items.forEach((item) => {
      item.imgUrl = `http://localhost:3333/uploads/${item.image}`;
    });

    return response.json({ items });
  };
}

export default ItemsController;
