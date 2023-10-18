"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5a114083-0031-4610-90dc-db4fca094b7e");
  }, []);
  return null;
};
