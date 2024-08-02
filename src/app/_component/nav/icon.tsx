"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons/faSkype";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

const Icon = () => {
  const [cam, setCam] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const [m, setM] = useState<boolean>(false);
  return (
    <div className="flex gap-2">
      <div className={f ? " text-blue-500" : ""}>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="mr-1 hover:cursor-pointer"
          size="2x"
          onMouseEnter={() => setF(true)}
          onMouseLeave={() => setF(false)}
        />
      </div>
      <div className={cam ? " text-blue-500" : ""}>
        <FontAwesomeIcon
          icon={faTelegram}
          className="mr-1 hover:cursor-pointer"
          size="2x"
          onMouseEnter={() => setCam(true)}
          onMouseLeave={() => setCam(false)}
        />
      </div>
      <div className={m ? " text-blue-500" : ""}>
        <FontAwesomeIcon
          icon={faSkype}
          className="mr-1 hover:cursor-pointer"
          size="2x"
          onMouseEnter={() => setM(true)}
          onMouseLeave={() => setM(false)}
        />
      </div>
    </div>
  );
};

export default Icon;
