const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single product by its `id` /api/products/{id}
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Category and Tag data
      include: [{ model: Product }],
    });

    if (!oneTag) {
      res.status(404).json({ message: 'There is no Tag found with that id!' });
      return;
    }
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag by its `id` value
  try {
    const tag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      });
    res.status(200).json(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id, },
    });
    if (!deleteTag) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.status(200).json(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
