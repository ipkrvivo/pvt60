export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/c0329295-058d-4c97-9905-dd6baa480b8e')) {
      url.hostname = 'xavmss.jjyut.repl.co'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
