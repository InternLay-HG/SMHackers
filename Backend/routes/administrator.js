const express = require('express');
const router = express.Router();
const Organisation = require('../db/db.js'); 
const zod = require('zod');

const organisationSchema = zod.object({
  userId: zod.string().nonempty('User ID is required'),
  organisation: zod.string().nonempty('Organisation name is required'),
  organisationId: zod.string().nonempty('Id required')
});

router.post('/addToOrganisation', async (req, res) => {
  try {
    const validatedParams = organisationSchema.parse(req.body);

    const existingOrganisation = await Organisation.findOne({
      organisationId: validatedParams.organisationId,
    });

    if (existingOrganisation) {
      return res.status(409).json({ message: 'Organisation already exists' });
    }

    const newOrganisation = await Organisation.create({
      userId: validatedParams.userId,
      organisation: validatedParams.organisation,
      organisationId: validatedParams.organisationId,
    });

    return res.status(201).json({
      message: 'Organisation added successfully',
      organisation: newOrganisation,
    });
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }

    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
