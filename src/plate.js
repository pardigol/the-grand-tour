// Zeichnet ein weißes Startnummernschild auf ein Canvas (für das 3D-Rad und das Trikot).

export const PLATE_FONT = '"Barlow Condensed", "Arial Narrow", Arial, sans-serif';

export function drawPlate(canvas, number, name) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Schild
  const r = W * 0.06;
  ctx.fillStyle = '#fbfbf6';
  ctx.beginPath();
  ctx.roundRect(W * 0.02, H * 0.02, W * 0.96, H * 0.96, r);
  ctx.fill();
  ctx.lineWidth = W * 0.008;
  ctx.strokeStyle = '#c9c9c0';
  ctx.stroke();

  // Löcher für die Kabelbinder
  ctx.fillStyle = '#9a9a92';
  for (const [x, y] of [
    [0.08, 0.1],
    [0.92, 0.1],
    [0.08, 0.9],
    [0.92, 0.9],
  ]) {
    ctx.beginPath();
    ctx.arc(W * x, H * y, W * 0.022, 0, Math.PI * 2);
    ctx.fill();
  }

  // Nummer
  const num = String(number ?? '');
  ctx.fillStyle = '#111';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  let size = H * 0.62;
  ctx.font = `800 ${size}px ${PLATE_FONT}`;
  const maxW = W * 0.82;
  const w = ctx.measureText(num).width;
  if (w > maxW) {
    size *= maxW / w;
    ctx.font = `800 ${size}px ${PLATE_FONT}`;
  }
  ctx.fillText(num, W / 2, H * 0.64);

  // Name
  const nm = String(name ?? '').toUpperCase();
  let ns = H * 0.15;
  ctx.font = `700 ${ns}px ${PLATE_FONT}`;
  const nw = ctx.measureText(nm).width;
  if (nw > W * 0.8) {
    ns *= (W * 0.8) / nw;
    ctx.font = `700 ${ns}px ${PLATE_FONT}`;
  }
  ctx.fillStyle = '#333';
  ctx.fillText(nm, W / 2, H * 0.84);
}
