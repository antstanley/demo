import mockData from './data'

const getSection = async (processArray, status, section) => {
  const sectionArray = processArray.filter(sectionItem => {
    if (status) {
      if (sectionItem.status) {
        if (sectionItem.status === status) {
          if (section) {
            if (section === sectionItem.path) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        }
      }
    } else {
      return true
    }
  })

  if (sectionArray[0]) {
    return sectionArray[0]
  } else {
    return {}
  }
}

const getDocuments = async (documentArray, status, section) => {
  return documentArray.filter(document => {
    if (status) {
      if (document.status) {
        if (document.status === status) {
          if (document.section.path) {
            if (document.section.path === section) {
              return true
            }
          }
        }
      }
    } else {
      if (document.section.path) {
        if (document.section.path === section) {
          return true
        }
      }
    }
  })
}

export default async ({ section, status }, context) => {
  console.log(`documentListBySection (section: ${section}, status: ${status})`)
  if (section && status) {
    
    const { key, name, description } = await getSection(
      mockData.sections,
      status,
      section
    )

    const documentArray = await getDocuments(
      mockData.documents,
      status,
      section
    )

    return {
      key,
      name,
      description,
      status,
      document: documentArray
    }
  } else {
    return {}
  }
}
