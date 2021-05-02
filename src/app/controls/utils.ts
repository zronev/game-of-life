export const downloadScreenshot = (
  canvas: HTMLCanvasElement,
  options: {
    imageType: 'image/png' | 'image/jpeg'
    quality: number
    fileName: string
  }
) => {
  const dataURL = canvas.toDataURL(options.imageType, options.quality)
  const link = document.createElement('a')

  link.setAttribute('download', options.fileName)
  link.href = dataURL
  document.body.appendChild(link)
  link.click()
  link.remove()
}
