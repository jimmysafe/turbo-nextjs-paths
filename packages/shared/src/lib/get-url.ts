/* eslint-disable node/no-process-env */

import canUseDOM from "./can-use-dom";

export function getServerSideURL() {
  let url = process.env.NEXT_PUBLIC_PAYLOAD_URL;

  if (!url) {
    url = "http://localhost:4000";
  }

  return url;
}

export function getClientSideURL() {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;

    return `${protocol}//${domain}${port ? `:${port}` : ""}`;
  }

  return process.env.NEXT_PUBLIC_PAYLOAD_URL || "";
}
