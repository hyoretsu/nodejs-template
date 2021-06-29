import { format } from 'date-fns';
import multer, { StorageEngine } from 'multer';
import path from 'path';

interface IUploadConfig {
 driver: 'disk';

 tmpFolder: string;
 uploadsFolder: string;

 multer: {
  storage: StorageEngine;
 };
}

const tmpFolder = path.resolve('..', '..', 'tmp');
export default {
 driver: process.env.STORAGE_DRIVER,

 tmpFolder,
 uploadsFolder: path.resolve(tmpFolder, 'uploads'),

 multer: {
  storage: multer.diskStorage({
   destination: tmpFolder,
   filename(req, file, cb) {
    return cb(null, `${format(new Date(), 'YYYYMMDD')}-${file.originalname}`);
   },
  }),
 },
} as IUploadConfig;
