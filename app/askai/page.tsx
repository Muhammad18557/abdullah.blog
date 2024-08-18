"use client";

import React from "react";
import styles from "./page.module.css";
import Chat from "../../components/ask.ai/Chat";

const AskAI = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Chat />
      </div>
    </main>
  );
};

export default AskAI;
