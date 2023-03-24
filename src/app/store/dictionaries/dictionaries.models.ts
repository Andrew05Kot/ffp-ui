import { ControlItem, Item } from "@app/models/frontend";

export interface Dictionaries {
  establishments: Dictionary;
  dishes: Dictionary;
  countries: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
