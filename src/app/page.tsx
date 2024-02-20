"use client";
import React from "react";
import { css } from "@emotion/react";
import Button from "./components/Button";
import AddressForm from "./components/AddressForm";

export default function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: 0 auto;
        text-align: center;
      `}
    >
      <div
        css={css`
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: bold;
        `}
      >
        Contact Details
      </div>
      <div
        css={css`
          background: var(--background-color-light);
          width: 100%;
          min-height: 40px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 2;
        `}
      >
        <AddressForm />
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        `}
      >
        <Button
          primary
          css={css`
            width: 100%;
            @media (min-width: 768px) {
              width: auto;
            }
          `}
          onClick={() => alert("submit")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
