import { RequestHandler } from "express";
import { ExchangeRequestPayload, ExchangeRequestResponse } from "@shared/api";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const handleSubmitRequest: RequestHandler = async (req, res) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      res.status(500).json({ ok: false, error: "Telegram env vars are missing" });
      return;
    }

    const body = req.body as Partial<ExchangeRequestPayload>;

    const payload: ExchangeRequestPayload = {
      city: String(body.city ?? "-").trim(),
      direction: String(body.direction ?? "-").trim(),
      amount: String(body.amount ?? "-").trim(),
      telegram: String(body.telegram ?? "-").trim(),
      note: String(body.note ?? "-").trim(),
      lang: body.lang === "RU" ? "RU" : "EN",
    };

    const title = payload.lang === "RU" ? "🆕 Новая заявка" : "🆕 New request";
    const message = [
      title,
      payload.lang === "RU" ? `Город: ${payload.city}` : `City: ${payload.city}`,
      payload.lang === "RU" ? `Направление: ${payload.direction}` : `Direction: ${payload.direction}`,
      payload.lang === "RU" ? `Сумма: ${payload.amount}` : `Amount: ${payload.amount}`,
      `Telegram: ${payload.telegram || "-"}`,
      payload.lang === "RU" ? `Комментарий: ${payload.note || "-"}` : `Note: ${payload.note || "-"}`,
    ]
      .map(escapeHtml)
      .join("\n");

    const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgResponse.ok) {
      const raw = await tgResponse.text();
      let reason = raw;
      try {
        const parsed = JSON.parse(raw) as { description?: string };
        if (parsed?.description) reason = parsed.description;
      } catch {
        // keep raw text
      }
      res.status(502).json({ ok: false, error: reason });
      return;
    }

    const response: ExchangeRequestResponse = { ok: true };
    res.status(200).json(response);
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown server error";
    res.status(500).json({ ok: false, error: details });
  }
};
