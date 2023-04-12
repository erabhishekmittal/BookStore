const express = require("express");
const router = new express.Router();

const BookList = require("../models/booklist");

// POST Method
router.post("/store", async (req, res) => {
  try {
    const addBook = new BookList(req.body);
    const insertData = await addBook.save();
    res.status(201).send(insertData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET Method
router.get("/store", async (req, res) => {
  try {
    const getBookLists = await BookList.find();
    res.status(200).send(getBookLists);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET Individual Data
router.get("/store/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getBookDetail = await BookList.findById(_id);
    res.status(200).send(getBookDetail);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PATCH Method
router.patch("/store/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const bookListUpdate = await BookList.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(bookListUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE Method
router.delete("/store/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteData = await BookList.findByIdAndDelete(_id);
    if (!_id) {
      res.status(400).send();
    }
    res.send(deleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;