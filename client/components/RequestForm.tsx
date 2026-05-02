// ...imports и остальной код без изменений

  const submit = async () => {
    if (isSending) return;
    setIsSending(true);
    try {
      const payload: ExchangeRequestPayload = {
        city,
        direction: t.directions[direction],
        amount: amount.trim() || "-",
        telegram: handle.trim() || "-",
        note: note.trim() || (city === "Dubai" ? t.dubaiLockRate : "-"),
        lang,
      };

      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(err.error || "Request failed");
      }

      alert(lang === "RU" ? "Заявка отправлена ✅" : "Request sent ✅");
      setAmount("");
      setHandle("");
      setNote("");
    } catch (error) {
      const details = error instanceof Error ? error.message : "";
      const prefix = lang === "RU" ? "Ошибка отправки." : "Failed to send.";
      alert(`${prefix} ${details}`.trim());
    } finally {
      setIsSending(false);
    }
  };

// ...остальной код без изменений
