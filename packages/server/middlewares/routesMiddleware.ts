import * as express from 'express';
import HelloWorldController from '../controllers/HelloWorldController';
import FooController from '../controllers/FooController';

export const router = express
    .Router()
    .get('/hello-world', HelloWorldController.index)
    .post('/hello-world', HelloWorldController.index)
    .get('/foo', FooController.index);
