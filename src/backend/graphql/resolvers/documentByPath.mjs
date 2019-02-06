import mockData from './data'
import readMarkdown from './util/readMarkdown'

const returnDoc = async documentArray => {
  if (documentArray[0]) {
    const {
      key,
      name,
      description,
      status,
      internalPath,
      path
    } = documentArray[0]

    const { markdown, frontmatter } = await readMarkdown(internalPath)

    if (markdown) {
      return { key, name, description, status, markdown, frontmatter, path }
    } else {
      return 'No Document Returned'
    }
  } else {
    return 'No Document Found'
  }
}

export default async ({ path }, context) => {
  console.log(`documentByPath (path: ${path})`)
  if (path) {
    const documentArray = mockData.documents.filter(document => {
      if (document.path) {
        if (document.path === path) {
          return true
        }
      }
    })

    return returnDoc(documentArray)
  } else {
    console.log('No Path Specified')
    return { error: 'No Path Specified' }
  }
}
