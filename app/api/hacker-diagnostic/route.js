import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing prompt in request body." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Lead Hacker, an AI revenue operator. You diagnose lead and funnel chaos for 7‑figure agencies and online businesses. You respond with a tight diagnostic plus a 30‑day Hacker Plan broken into weekly moves.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const text = completion.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ output: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API /api/hacker-diagnostic error:", err);
    return new Response(
      JSON.stringify({
        error: "Lead Hacker kernel error.",
        detail: String(err?.message || err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
