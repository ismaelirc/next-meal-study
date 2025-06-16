import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db', { verbose: console.log });

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));  
  //throw new Error('Database connection failed'); // Simulating a database error for demonstration
  return db.prepare('SELECT * FROM meals').all();
} 

export function getMeal(slug) {
  
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
 // const { name, email, title, summary, instructions, image } = meal;
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}-${Math.floor(Math.random() * 10000)}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage, 'base64'), (error) => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });
  stream.end();
  
  meal.image = `/images/${fileName}`;
  db.prepare('INSERT INTO meals (creator, creator_email, title, summary, instructions, image, slug) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(meal.creator, meal.creator_email, meal.title, meal.summary, meal.instructions, meal.image, fileName);
  
  
}