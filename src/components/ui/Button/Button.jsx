import React from "react";
import { StyledButton } from "./styled";

function Button({ onClick ,children }) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;
