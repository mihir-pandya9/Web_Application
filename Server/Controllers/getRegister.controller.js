import asyncHandler from 'express-async-handler'
import { Register } from '../models/RegistrationForm/Register.model.js'

const getregisterData = asyncHandler(async(req,res) => {
  
  const data = Register.get()
})