import { InfluxWriter } from '@honzamac/winston-influx';

export const writer = new InfluxWriter({
  host: 'localhost',
  database: 'winston',
  interval: 10,
});
