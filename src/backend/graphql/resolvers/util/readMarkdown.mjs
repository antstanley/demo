const fs = require('fs')
const path = require('path')
const yamlFront = require('yaml-front-matter')

export default async fileLocation => {
  try {
    const reqFile = path.join(__dirname, fileLocation)
    const fileContents = fs.readFileSync(reqFile, 'utf8')
    const frontmatter = yamlFront.loadFront(fileContents)
    const markdown = frontmatter.__content
    delete frontmatter.__content
    return { markdown, frontmatter }
  } catch (err) {
    console.log(err)
    return err
  }
}
