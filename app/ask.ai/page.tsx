"use client";

import React from "react";
import styles from "./page.module.css";
import Chat from "../../components/ask.ai/Chat";

const AskAI = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className="text-2xl text-white text-center mt-4 mb-4">Chat with Abdullah's AI assistant</h1>
        <Chat />
      </div>
    </main>
  );
};

export default AskAI;
