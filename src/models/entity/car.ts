import { Model, ModelObject } from "objection";
import knexInstance from "../../../config/postgresql";

export class CarEntity extends Model {
  id?: bigint;
  car_name!: string;
  car_categories!: string;
  car_size!: string;
  status_rental!: string;
  car_img!: string;
  created_at?: Date;
  updated_at?: Date;

  static get tableName() {
    return "cars";
  }
}

Model.knex(knexInstance);

export type Car = ModelObject<CarEntity>;