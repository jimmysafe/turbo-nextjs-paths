import * as migration_20241210_180622_init from "./20241210_180622_init";
import * as migration_20241210_181000_address from "./20241210_181000_address";
import * as migration_20241210_181326_city from "./20241210_181326_city";

export const migrations = [
  {
    up: migration_20241210_180622_init.up,
    down: migration_20241210_180622_init.down,
    name: "20241210_180622_init",
  },
  {
    up: migration_20241210_181000_address.up,
    down: migration_20241210_181000_address.down,
    name: "20241210_181000_address",
  },
  {
    up: migration_20241210_181326_city.up,
    down: migration_20241210_181326_city.down,
    name: "20241210_181326_city",
  },
];
