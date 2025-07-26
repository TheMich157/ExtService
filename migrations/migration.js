/** Placeholder migration script */
module.exports = async function migrate(user) {
  // Example: increment schema version
  if (user.schemaVersion < Number(process.env.SCHEMA_VERSION)) {
    user.schemaVersion = Number(process.env.SCHEMA_VERSION);
    await user.save();
  }
  return user;
};
