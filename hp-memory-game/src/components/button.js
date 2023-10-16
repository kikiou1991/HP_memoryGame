import React from "react";

function ResetButton({ onReset }) {
    return (
        <button className="reset-button" onClick={onReset}>
            Reset Board
        </button>
    );
}

export default ResetButton;