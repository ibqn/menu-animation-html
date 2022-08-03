const menuAnimation = () => {
  const anchors = document.querySelectorAll('.nav ul li a')

  anchors.forEach((a) => {
    const text = a.innerHTML

    const words = text.split(' ')
    let index = 0

    a.innerHTML = words
      .map((word) => {
        const chars = [...word]
          .map((char) => {
            return `<span data-text="${char}" style="--index: ${index++}" class="char">${char}</span>`
          })
          .join('')

        return `<span class="word">${chars}</span>`
      })
      .join(' ')
  })
}

menuAnimation()
