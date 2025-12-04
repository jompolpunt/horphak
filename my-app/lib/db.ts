
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export let db: any = null;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './horpak.db',
      driver: sqlite3.Database,
    });
  }
  return db;
}
