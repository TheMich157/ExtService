#!/usr/bin/env node
const { program } = require('commander');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const connectDB = require('../src/config/db');
const userService = require('../src/services/userService');
const backupService = require('../src/services/backupService');
const migrationService = require('../src/services/migrationService');
const historyService = require('../src/services/historyService');
const adminService = require('../src/services/adminService');

async function init() { await connectDB(); }

program
  .command('get <userId>')
  .action(async (id) => { await init(); const u = await userService.loadUser(id); console.log(u); process.exit(); });

program
  .command('backup <userId>')
  .action(async (id) => { await init(); const b = await backupService.listBackups(id); console.log(b); process.exit(); });

program
  .command('migrate <userId>')
  .action(async (id) => { await init(); const r = await migrationService.migrateUser(id); console.log(r); process.exit(); });

program
  .command('history <userId>')
  .action(async (id) => { await init(); const h = await historyService.listHistory(id); console.log(h); process.exit(); });

program
  .command('create-admin <username> <password>')
  .action(async (username, password) => {
    await init();
    const admin = await adminService.createAdmin(username, password);
    console.log(admin);
    process.exit();
  });

program
  .command('users')
  .action(async () => {
    await init();
    const users = await adminService.listUsers();
    console.log(users);
    process.exit();
  });

program.parse(process.argv);
