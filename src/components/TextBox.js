import React from 'react';

function TextBox({text, style}) {
    return (
        <div className = "textBox" style = {style}>
            <p>{text}</p>
            <input type = "text" placeholder={text} />
        </div>
    );
}

export default TextBox;