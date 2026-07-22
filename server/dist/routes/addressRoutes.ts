import express from "express";
import auth from "../../middleware/auth.js";
import { addAddress, deleteAddress, getAddresses, updateAddress } from "../../controllers/addressController.js";

const addressRouter = express.Router()

addressRouter.get('/', auth, getAddresses)
addressRouter.get('/', auth, addAddress)
addressRouter.get('/', auth, updateAddress)
addressRouter.get('/', auth, deleteAddress)

export default addressRouter