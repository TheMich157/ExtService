// IP Whitelist middleware (disabled by default).
// To enable, uncomment the lines below and the middleware in src/index.js.
// Set ALLOWED_IPS in your .env (comma-separated). Leave empty to allow all IPs.


//const allowed = (process.env.ALLOWED_IPS || '').split(',').filter(Boolean);

//module.exports.ipWhitelist = (req, res, next) => {
  //if (allowed.length && !allowed.includes(req.ip)) {
   // return res.status(403).json({ error: 'IP not allowed' });
//  }
 // next();
// };
