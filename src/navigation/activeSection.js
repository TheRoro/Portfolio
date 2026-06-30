const findActiveSection = (sections, probePosition) => {
  let activeSection = sections[0]?.id ?? ""

  for (const section of sections) {
    if (section.top > probePosition) break
    activeSection = section.id
  }

  return activeSection
}

export { findActiveSection }
