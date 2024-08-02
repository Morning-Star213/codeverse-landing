"use client";
import Input from "./input";
import React, { useState } from "react";
import Image from "next/image";

const Submit = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setError] = useState<any>({});

  const onsubmit = () => {
    let err: any = {};
    if (name === "") err.name = "Please enter Your name.";
    if (phone === "") err.phone = "Please enter Phone number.";
    setError(err);
  };
  return (
    <div className="px-5 border-b-[1px] xl:px-[150px]" id="contact">
      <div className="flex flex-col md:px-[100px] md:flex-row justify-between">
        <div className="text-[45px] lg:text-[60px] xl:text-[80px]  text-center textImage">
          GET IN TOUCH
        </div>
        <div className="text-[14px] md:text-[9px] lg:text-[12px] xl:text-[16.5px] md:flex my-auto text-center md:text-left basis-1/4">
          Leave your name and phone number so we can contact you as soon as
          possible
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center lg:justify-center md:px-[100px] items-center p-5">
        <div className="pb-5 md:pb-0" onClick={() => setError({})}>
          <Input
            type="text"
            placeholder="Yuliia"
            onChange={(e) => {
              setName(e.target?.value);
              setError({});
            }}
            error={errors?.name}
          >
            Your name
          </Input>
        </div>
        <div onClick={() => setError({})}>
          <Input
            type="string"
            placeholder="+242121212"
            error={errors?.phone}
            onChange={(e) => {
              setPhone(e.target?.value);
            }}
          >
            Phone
          </Input>
        </div>
        <div className="p-5">
          <Image
            src={submit ? "/image/submit2.svg" : "/image/submit1.svg"}
            alt="submitus"
            className="hover:cursor-pointer"
            width={165}
            height={55}
            onMouseEnter={() => setSubmit(true)}
            onMouseLeave={() => setSubmit(false)}
            onClick={onsubmit}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Submit;
