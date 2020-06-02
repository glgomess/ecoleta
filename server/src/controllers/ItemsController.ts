import knex from "../database/connection";
import { Request, Response } from "express";

class ItemsController {
  index = async (request: Request, response: Response) => {
    const items = await knex("items").select("*");

    return response.json({ items });
  };
}

export default ItemsController;
