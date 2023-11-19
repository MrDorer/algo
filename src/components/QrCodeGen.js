import React from 'react';
import QRCode from 'qrcode.react';

function QrCodeGen({ data }) {
  return (
    <div>
      <QRCode value={data} size={128} />
    </div>
  );
}

export default QrCodeGen
