import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <OtpInput
        className="otp-box-wid-hgt"
        value={otp}
        onChange={(e) => setOtp(e)}
        numInputs={4}
        separator={<span className="pr-3"> </span>}
      />
    </div>
  );
}
