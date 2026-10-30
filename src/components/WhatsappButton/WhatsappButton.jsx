
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  const mensagem =
    "Olá, gostaria de tirar uma dúvida com assunto: ";

  const whatsappUrl = `https://wa.me/5588993849658?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Entre em contato pelo WhatsApp"
      title="Fale comigo pelo WhatsApp"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsappButton;
