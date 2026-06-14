import React, { useState } from "react"
import "./styles.scss"

const PaletteComponent = ({ palette }) => {
  const [copyStatus, setCopyStatus] = useState({ message: "", sequence: 0 })

  const copyWithFallback = value => {
    const elem = document.createElement("textarea")
    elem.value = value
    elem.setAttribute("readonly", "")
    elem.className = "sr-only"
    document.body.appendChild(elem)
    elem.select()
    const copied = document.execCommand("copy")
    document.body.removeChild(elem)
    return copied
  }

  const copyHexColor = async (color, trigger) => {
    let copied = false

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(color.background)
        copied = true
      } catch (error) {
        copied = copyWithFallback(color.background)
        if (!copied) {
          console.error("Unable to copy project color", error)
        }
      }
    } else {
      copied = copyWithFallback(color.background)
    }

    trigger.focus()
    setCopyStatus(status => ({
      message: copied
        ? `Copied ${color.background} to clipboard`
        : `Could not copy ${color.background}`,
      sequence: status.sequence + 1,
    }))
  }

  return (
    <>
      <div
        className="palette-row"
        role="group"
        aria-label="Project color palette"
      >
        {palette.map(color => (
          <button
            className="color-circle"
            type="button"
            onClick={event => copyHexColor(color, event.currentTarget)}
            aria-label={`Copy color ${color.background}`}
            style={{ background: color.background, color: color.text }}
            key={color.background}
          >
            {color.background}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        <span key={copyStatus.sequence}>{copyStatus.message}</span>
      </p>
    </>
  )
}

export default PaletteComponent
