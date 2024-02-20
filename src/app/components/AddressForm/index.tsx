import React from "react";
import { css } from "@emotion/react";

export default function AddressForm() {
  return (
    <form noValidate autoComplete="off">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.5rem;
          > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: left;
          }
          label,
          .helper-text {
            display: block;
          }
          .helper-text {
            font-size: 0.8rem;
            color: var(--text-color-secondary);
            margin-top: 0.5rem;
          }
          input {
            padding: 0.5rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-bottom: 1rem;
            margin-top: 0.5rem;
          }
        `}
      >
        <div>
          <label
            css={css`
              color: black;
            `}
          >
            Name
          </label>
          <span className="helper-text">Please enter a name</span>
          <input
            required
            name="name"
            defaultValue=""
            placeholder="Enter a name"
            type="text"
          />
        </div>
        <div>
          <label
            css={css`
              color: #555;
            `}
          >
            Line 1
          </label>
          <input
            required
            name="line1"
            defaultValue=""
            placeholder="Enter line 1"
            type="text"
            css={css`
              margin-right: 1.5rem;
            `}
          />
        </div>
        <div>
          <label
            css={css`
              color: #000;
            `}
          >
            Line 2
          </label>
          <input
            name="line2"
            defaultValue=""
            placeholder="Enter line 2"
            type="text"
            css={css`
              margin-left: 0.5rem;
            `}
          />
        </div>
        <div>
          <label
            css={css`
              color: "rgba(0, 0, 0, 0.9)";
            `}
          >
            Postcode
          </label>
          <input
            required
            name="line1"
            defaultValue=""
            placeholder="Enter postcode"
            type="text"
            css={css`
              margin-left: 0.5rem;
            `}
          />
        </div>
      </div>
    </form>
  );
}
