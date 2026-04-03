const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = "";
const SENDER_EMAIL = "distribuidorajs@gmail.com";
const RECIPIENT_EMAIL = "distribuidorajs@gmail.com";

const form = document.getElementById("contact-form");
const statusNode = document.getElementById("form-status");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX = /^\+?[0-9\s\-()]{8,20}$/;

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildTimestamp() {
  const now = new Date();
  return {
    iso: now.toISOString(),
    local: now.toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })
  };
}

if (form && statusNode) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const empresa = (formData.get("empresa") || "").toString().trim();
    const contacto = (formData.get("contacto") || "").toString().trim();
    const correo = (formData.get("correo") || "").toString().trim();
    const telefono = (formData.get("telefono") || "").toString().trim();
    const detalles = (formData.get("detalles") || "").toString().trim();

    if (!empresa || !contacto || !correo || !detalles) {
      statusNode.textContent = "Completá empresa, contacto, correo y detalles.";
      statusNode.className = "form-status error";
      return;
    }

    if (!EMAIL_REGEX.test(correo)) {
      statusNode.textContent = "Ingresá un correo electrónico válido.";
      statusNode.className = "form-status error";
      return;
    }

    if (telefono && !PHONE_REGEX.test(telefono)) {
      statusNode.textContent = "Ingresá un número de teléfono válido.";
      statusNode.className = "form-status error";
      return;
    }

    const timestamp = buildTimestamp();
    const subject = `[IMPORTANTE][URGENTE] Nueva solicitud de diagnostico | ${empresa} | ${timestamp.local}`;

    const textContent = [
      "Smulever Web Consulting - Nueva consulta urgente",
      "",
      `Timestamp local: ${timestamp.local}`,
      `Timestamp ISO: ${timestamp.iso}`,
      `Empresa: ${empresa}`,
      `Contacto: ${contacto}`,
      `Correo: ${correo}`,
      `Telefono: ${telefono || "No informado"}`,
      "",
      "Detalles:",
      detalles
    ].join("\n");

    const htmlContent = `
      <h2>Smulever Web Consulting - Nueva consulta urgente</h2>
      <p><strong>Timestamp local:</strong> ${escapeHtml(timestamp.local)}</p>
      <p><strong>Timestamp ISO:</strong> ${escapeHtml(timestamp.iso)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
      <p><strong>Contacto:</strong> ${escapeHtml(contacto)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(telefono || "No informado")}</p>
      <p><strong>Detalles:</strong><br>${escapeHtml(detalles).replace(/\n/g, "<br>")}</p>
    `;

    statusNode.textContent = "Enviando consulta...";
    statusNode.className = "form-status";

    try {
      const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: {
            name: "Smulever Web Consulting",
            email: SENDER_EMAIL
          },
          to: [
            {
              email: RECIPIENT_EMAIL,
              name: "Smulever Web Consulting"
            }
          ],
          replyTo: {
            email: correo,
            name: contacto
          },
          subject,
          textContent,
          htmlContent
        })
      });

      const responseBody = await response.text();
      if (!response.ok) {
        throw new Error(`Brevo respondio ${response.status}: ${responseBody}`);
      }

      statusNode.textContent = "Consulta enviada correctamente.";
      statusNode.className = "form-status success";
      form.reset();
    } catch (error) {
      statusNode.textContent = "Error al enviar. Revisa consola/red y configuracion de Brevo.";
      statusNode.className = "form-status error";
      console.error(error);
    }
  });
}
