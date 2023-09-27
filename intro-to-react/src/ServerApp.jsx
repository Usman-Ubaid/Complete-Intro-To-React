import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Main from "./main";

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Main />
    </StaticRouter>,
    opts
  );

  return stream;
}
