import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

function isSameOriginReferer(referer: string, origin: string) {
  if (!referer.startsWith(origin)) return false;
  const nextCharacter = referer.at(origin.length);
  return nextCharacter === undefined || ["/", "?", "#"].includes(nextCharacter);
}

const csrfMiddleware = createMiddleware({ type: "request" }).server(
  async ({ request, serverFnMeta, next }) => {
    if (!serverFnMeta || !["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
      return next();
    }

    const requestOrigin = new URL(request.url).origin;
    const fetchSite = request.headers.get("Sec-Fetch-Site");
    const origin = request.headers.get("Origin");
    const referer = request.headers.get("Referer");

    const isSameOrigin =
      fetchSite === "same-origin" ||
      (fetchSite === null && origin !== null && origin === requestOrigin) ||
      (fetchSite === null &&
        origin === null &&
        referer !== null &&
        isSameOriginReferer(referer, requestOrigin));

    if (!isSameOrigin) {
      return new Response("Forbidden", { status: 403 });
    }

    return next();
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware, errorMiddleware],
}));
