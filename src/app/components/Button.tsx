import React from "react";
import styled from "@emotion/styled";

type StyledButtonProps = {
  primary?: boolean;
  size?: "sm" | "md" | "lg";
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.primary ? "var(--color-primary)" : "var(--color-neutral)"};
  color: ${(props) =>
    props.primary ? "var(--color-white)" : "var(--color-black)"};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: var(--color-primary-light);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.22);
  }
`;

export type ButtonProps = React.ComponentProps<typeof StyledButton>;

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
