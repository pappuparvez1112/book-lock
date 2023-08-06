import dayjs from "dayjs";
import pinoLogger from "pino";
import pinoPretty from "pino-pretty"


const log = pinoLogger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  },prettifier:pinoPretty,
//   timestamp:()=>`"time":"${dayjs().format()}"`
});

export {log}