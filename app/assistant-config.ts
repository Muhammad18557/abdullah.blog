export let assistantId = "asst_zR4YFTMHEyyKgykXZZV73FMx";

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID ?? "";
}
