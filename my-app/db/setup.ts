
import { getDb } from '../lib/db.ts';
import { POPULAR_CONDOS, DAILY_APARTMENTS } from '../lib/property-data.ts';

async function setup() {
  const db = await getDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS condos (
      id INTEGER PRIMARY KEY,
      name TEXT,
      nameEn TEXT,
      location TEXT,
      locationShort TEXT,
      price TEXT,
      priceUnit TEXT,
      image TEXT,
      description TEXT,
      phone TEXT
    );

    CREATE TABLE IF NOT EXISTS condo_gallery_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      condo_id INTEGER,
      image_url TEXT,
      FOREIGN KEY (condo_id) REFERENCES condos (id)
    );

    CREATE TABLE IF NOT EXISTS condo_nearby_universities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      condo_id INTEGER,
      name TEXT,
      distance TEXT,
      FOREIGN KEY (condo_id) REFERENCES condos (id)
    );

    CREATE TABLE IF NOT EXISTS condo_transit (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      condo_id INTEGER,
      name TEXT,
      distance TEXT,
      FOREIGN KEY (condo_id) REFERENCES condos (id)
    );

    CREATE TABLE IF NOT EXISTS condo_nearby_places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      condo_id INTEGER,
      name TEXT,
      FOREIGN KEY (condo_id) REFERENCES condos (id)
    );

    CREATE TABLE IF NOT EXISTS condo_facilities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      condo_id INTEGER,
      name TEXT,
      FOREIGN KEY (condo_id) REFERENCES condos (id)
    );

    CREATE TABLE IF NOT EXISTS daily_apartments (
      id INTEGER PRIMARY KEY,
      name TEXT,
      location TEXT,
      locationFull TEXT,
      priceMonth TEXT,
      priceDay TEXT,
      image TEXT,
      description TEXT,
      phone TEXT
    );

    CREATE TABLE IF NOT EXISTS daily_apartment_gallery_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apartment_id INTEGER,
      image_url TEXT,
      FOREIGN KEY (apartment_id) REFERENCES daily_apartments (id)
    );

    CREATE TABLE IF NOT EXISTS daily_apartment_nearby_universities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apartment_id INTEGER,
      name TEXT,
      distance TEXT,
      FOREIGN KEY (apartment_id) REFERENCES daily_apartments (id)
    );

    CREATE TABLE IF NOT EXISTS daily_apartment_transit (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apartment_id INTEGER,
      name TEXT,
      distance TEXT,
      FOREIGN KEY (apartment_id) REFERENCES daily_apartments (id)
    );

    CREATE TABLE IF NOT EXISTS daily_apartment_nearby_places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apartment_id INTEGER,
      name TEXT,
      FOREIGN KEY (apartment_id) REFERENCES daily_apartments (id)
    );

    CREATE TABLE IF NOT EXISTS daily_apartment_facilities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apartment_id INTEGER,
      name TEXT,
      FOREIGN KEY (apartment_id) REFERENCES daily_apartments (id)
    );
  `);

  await db.exec('BEGIN TRANSACTION');

  for (const condo of POPULAR_CONDOS) {
    const { id, name, nameEn, location, locationShort, price, priceUnit, image, description, phone, galleryImages, nearbyUniversities, transit, nearbyPlaces, facilities } = condo;
    await db.run(
      'INSERT OR IGNORE INTO condos (id, name, nameEn, location, locationShort, price, priceUnit, image, description, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      id,
      name,
      nameEn,
      location,
      locationShort,
      price,
      priceUnit,
      image,
      description,
      phone
    );

    for (const imageUrl of galleryImages) {
      await db.run('INSERT OR IGNORE INTO condo_gallery_images (condo_id, image_url) VALUES (?, ?)', id, imageUrl);
    }

    for (const university of nearbyUniversities) {
      await db.run('INSERT OR IGNORE INTO condo_nearby_universities (condo_id, name, distance) VALUES (?, ?, ?)', id, university.name, university.distance);
    }

    for (const transitItem of transit) {
      await db.run('INSERT OR IGNORE INTO condo_transit (condo_id, name, distance) VALUES (?, ?, ?)', id, transitItem.name, transitItem.distance);
    }

    for (const place of nearbyPlaces) {
      await db.run('INSERT OR IGNORE INTO condo_nearby_places (condo_id, name) VALUES (?, ?)', id, place);
    }

    for (const facility of facilities) {
      await db.run('INSERT OR IGNORE INTO condo_facilities (condo_id, name) VALUES (?, ?)', id, facility);
    }
  }

  for (const apartment of DAILY_APARTMENTS) {
    const { id, name, location, locationFull, priceMonth, priceDay, image, description, phone, galleryImages, nearbyUniversities, transit, nearbyPlaces, facilities } = apartment;
    await db.run(
      'INSERT OR IGNORE INTO daily_apartments (id, name, location, locationFull, priceMonth, priceDay, image, description, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      id,
      name,
      location,
      locationFull,
      priceMonth,
      priceDay,
      image,
      description,
      phone
    );

    for (const imageUrl of galleryImages) {
      await db.run('INSERT OR IGNORE INTO daily_apartment_gallery_images (apartment_id, image_url) VALUES (?, ?)', id, imageUrl);
    }

    for (const university of nearbyUniversities) {
      await db.run('INSERT OR IGNORE INTO daily_apartment_nearby_universities (apartment_id, name, distance) VALUES (?, ?, ?)', id, university.name, university.distance);
    }

    for (const transitItem of transit) {
      await db.run('INSERT OR IGNORE INTO daily_apartment_transit (apartment_id, name, distance) VALUES (?, ?, ?)', id, transitItem.name, transitItem.distance);
    }

    for (const place of nearbyPlaces) {
      await db.run('INSERT OR IGNORE INTO daily_apartment_nearby_places (apartment_id, name) VALUES (?, ?)', id, place);
    }

    for (const facility of facilities) {
      await db.run('INSERT OR IGNORE INTO daily_apartment_facilities (apartment_id, name) VALUES (?, ?)', id, facility);
    }
  }

  await db.exec('COMMIT');

  console.log('Database setup and seeding complete.');
}

setup();
