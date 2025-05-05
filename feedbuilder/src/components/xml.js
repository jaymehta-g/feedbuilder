export function writeXML(data) {
  // parent dir of this script.js goes here
  // as in, if the script is at /blog/script.js, put something like this
  // but if your blog is in the top level folder, just put the url for your website without the /blog/ at the end
  let blogURL = "https://yoursitehere.neocities.org/blog/"
  // generate something here from https://www.guidgenerator.com/
  // dont leave it as it is!
  let guid = "5cdcb440-4723-4393-aa1b-efb3dd44d2ab"

  let blogName = "lmao"
  let authorName = "jay"
  
  //====================
  
  let atom = ""
  atom += '<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom">'
  atom += '<title>' + blogName + '</title>'
  atom += '<link href="' + blogURL + '"/>'
  atom += '<updated>' + new Date().toISOString() + '</updated>'
  atom +=  '<author><name>' + authorName + '</name></author>'
  atom += '<id>' + guid + '</id>'
  
  // now entries
  for (let i = 0; i < data.length; i++) {
    let post = data[i]
    atom += '<entry>'
    atom += '<title>' + (!!post.title ? post.title : "Untitled") + '</title>'
    // validate url
    try {
      let _ = new URL(post.link)
      atom += '<link href="' + post.link + '"/>'
    } catch(_) {
      atom += '<link href="https://example.com" rel="self"/>'
    }
    atom += '<id>' + post.id + '</id>' 
    atom += '<updated>' + new Date(post.updated).toISOString() + '</updated>'
    atom += '<published>' + new Date(post.published).toISOString() + '</published>'
    atom += '</entry>'
  }
  
  atom += '</feed>'

  return atom
}