import React from "react"
import "./styles.scss"

const PaletteComponent = ({ palette }) => {
  const copyHexColor = color => {
    const elem = document.createElement("textarea")
    elem.value = color.background
    document.body.appendChild(elem)
    elem.select()
    document.execCommand("copy")
    document.body.removeChild(elem)
  }

  return (
    <div className="palette-row">
      {palette.map((color, index) => (
        <div
          className="color-circle"
          onClick={() => {
            copyHexColor(color)
          }}
          onKeyDown={() => {
            copyHexColor(color)
          }}
          role="button"
          tabIndex={index}
          style={{ background: color.background, color: color.text }}
          key={index}
        >
          {color.background}
        </div>
      ))}
    </div>
  )
}

export default PaletteComponent
