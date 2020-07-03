import express from 'express';
import _ from 'lodash';
import { getUser, createUser } from '../db';

const router = express.Router();

router.get('/user', (req, res) => {
    res.json({ user: getUser() });
});

router.post('/user', (req, res) => {
    const data = req.body;
    if (!_.isEmpty(data)) {
        createUser({ ...data });
        res.json({ msg: 'success' });
    }
});

router.put('/user/:id', (req, res) => {
    res.json({ user: 'put User' });
});

router.delete('/user/:id', (req, res) => {
    res.json({ user: 'delete User' });
});

export default router;
