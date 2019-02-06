import mockData from './data'

export default ({ status }, context) => {
  console.log(`allSections (status: ${status})`)
  const sectionArray = mockData.sections.filter(section => {
    if (status) {
      if (section.status) {
        if (section.status === status) {
          return true
        }
      }
    } else {
      return true
    }
  })
  return sectionArray
}
