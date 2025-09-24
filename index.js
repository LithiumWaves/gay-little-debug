// Minimal test extension — shows a visible badge and logs to console.
// If you see the badge or the console logs, the extension system works.

export function init() {
  console.log("[Dangan Debug] init() called");

  // visual badge visible on mobile (non-invasive)
  if (!document.getElementById("dangan-debug-badge")) {
    const badge = document.createElement("div");
    badge.id = "dangan-debug-badge";
    badge.textContent = "Dangan Debug ON";
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "120px",
      right: "12px",
      zIndex: "2147483647",
      background: "#ffeb7a",
      color: "#000",
      padding: "8px 10px",
      borderRadius: "8px",
      fontWeight: "700",
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      fontSize: "12px",
      touchAction: "manipulation"
    });
    document.body.appendChild(badge);
  }
}

export function unload() {
  const b = document.getElementById("dangan-debug-badge");
  if (b) b.remove();
  console.log("[Dangan Debug] unloaded");
}
