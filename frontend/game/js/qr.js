const qrScanner = new Html5Qrcode("reader");

export function startScanner() {
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    (decodedText) => {
      console.log(decodedText);
    }
  );
}