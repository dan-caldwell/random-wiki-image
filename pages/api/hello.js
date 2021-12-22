const axios = require('axios');
const { parse } = require('node-html-parser');

const handler = async (req, res) => {
  let src = null;
  let title = null;
  while (!src) {
    const { data } = await axios.get('https://commons.wikimedia.org/wiki/Special:Random/File');
    const root = parse(data);
    const link = root.querySelector('.mw-filepage-other-resolutions a:nth-child(2)');
    title = root.querySelector('#firstHeading').innerHTML;
    if (!link) continue;
    src = link.getAttribute('href');
  }

  res.status(200).json({
    src,
    title
  })
}

export default handler;
