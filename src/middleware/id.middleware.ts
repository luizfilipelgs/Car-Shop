import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

const verifyId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) return res.status(422).json({ message: 'Invalid mongo id' });
  
  return next();
};

export default verifyId;