(async () => {
  const errs = [];
  window.addEventListener('error', e => errs.push(String(e.message)));
  await new Promise(r => setTimeout(r, 3000));
  return JSON.stringify({
    webgl: (() => { try { return !!document.createElement('canvas').getContext('webgl'); } catch(e) { return 'threw'; } })(),
    rendererNull: (typeof Preview !== 'undefined') ? (Preview.renderer === null) : 'no Preview',
    errors: [...new Set(errs)].slice(0, 3),
  });
})()
