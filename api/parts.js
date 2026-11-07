export async function GET(request) {
  const { FAVORIT_API_BASE_URL, FAVORIT_API_KEY } = process.env;

  if (!FAVORIT_API_BASE_URL || !FAVORIT_API_KEY) {
    return Response.json({ error: "Не настроено подключение к API." }, { status: 500 });
  }

  const params = new URL(request.url).searchParams;
  const number = params.get("number")?.trim() ?? "";

  try {
    const url = new URL(FAVORIT_API_BASE_URL);

    url.searchParams.set("key", FAVORIT_API_KEY);
    url.searchParams.set("number", number);

    const brand = params.get("brand");
    if (brand) url.searchParams.set("brand", brand);

    if (params.get("analogues") === "on") {
      url.searchParams.set("analogues", "on");
    }

    const response = await fetch(url, {
      signal: AbortSignal.timeout(10_000),
    });

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    const timedOut = error.name === "TimeoutError";

    return Response.json(
      {
        error: timedOut
          ? "Превышено время ожидания ответа от сервера. Попробуйте ещё раз."
          : "Не удалось получить данные от сервера. Попробуйте ещё раз.",
      },
      { status: timedOut ? 504 : 502 },
    );
  }
}
