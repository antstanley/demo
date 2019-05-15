const middleware = {}

middleware['auth'] = require('../src/website/middleware/auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['gql/index'] = require('../src/website/middleware/gql/index.js');
middleware['gql/index'] = middleware['gql/index'].default || middleware['gql/index']

middleware['markdown/highlight'] = require('../src/website/middleware/markdown/highlight.js');
middleware['markdown/highlight'] = middleware['markdown/highlight'].default || middleware['markdown/highlight']

middleware['markdown/index'] = require('../src/website/middleware/markdown/index.js');
middleware['markdown/index'] = middleware['markdown/index'].default || middleware['markdown/index']

export default middleware
