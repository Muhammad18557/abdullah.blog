import { openai } from "@/app/openai";

export async function POST(
  request: Request,
  { params: { threadId } }: { params: { threadId: string } }
) {
  const { toolCallOutputs, runId } = await request.json();

  const stream = openai.beta.threads.runs.submitToolOutputsStream(
    threadId,
    runId,
    // { tool_outputs: [{ output: result, tool_call_id: toolCallId }] },
    { tool_outputs: toolCallOutputs }
  );

  return new Response(stream.toReadableStream());
}
