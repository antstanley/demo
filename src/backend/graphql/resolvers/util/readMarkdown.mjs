import { readFileSync } from 'fs'
import { join, dirname, basename } from 'path'
import yamlFront from 'yaml-front-matter'

export default async fileLocation => {
  try {
    const reqFile = join(
      dirname(new URL(import.meta.url).pathname),
      fileLocation
    )
    const fileContents = readFileSync(reqFile, 'utf8')
    const frontmatter = yamlFront.loadFront(fileContents)
    const markdown = frontmatter.__content
    delete frontmatter.__content
    return { markdown, frontmatter }
  } catch (err) {
    console.log(err)
    return err
  }
}
