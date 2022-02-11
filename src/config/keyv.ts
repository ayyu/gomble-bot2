if (process.env.NODE_ENV != 'production') require('dotenv').config();

export const uri = process.env.DATABASE_URL ?? '';
export const options = {
	ssl: { require: true, rejectUnauthorized: false, },
};
