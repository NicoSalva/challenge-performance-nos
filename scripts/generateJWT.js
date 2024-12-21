import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateJWT = () => {
    const payload = { user: 'testuser' };
    const secretKey = process.env.JWT_SECRET_KEY;
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secretKey, options);
    console.log(token);
    return token;
};

generateJWT();



