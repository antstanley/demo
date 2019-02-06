import * as jsYaml from 'js-yaml'

function parse (text, options, loadSafe) {
  let contentKeyName =
    options && typeof options === 'string'
      ? options
      : options && options.contentKeyName
        ? options.contentKeyName
        : '__content'

  let passThroughOptions =
    options && typeof options === 'object' ? options : undefined

  let re = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/

  let results = re.exec(text)

  let conf = {}

  let yamlOrJson

  if ((yamlOrJson = results[2])) {
    if (yamlOrJson.charAt(0) === '{') {
      conf = JSON.parse(yamlOrJson)
    } else {
      if (loadSafe) {
        conf = jsYaml.safeLoad(yamlOrJson, passThroughOptions)
      } else {
        conf = jsYaml.load(yamlOrJson, passThroughOptions)
      }
    }
  }

  conf[contentKeyName] = results[3] || ''

  return conf
}

const loadFront = (content, options) => {
  return parse(content, options, false)
}

const safeLoadFront = (content, options) => {
  return parse(content, options, true)
}

export { loadFront, safeLoadFront }
