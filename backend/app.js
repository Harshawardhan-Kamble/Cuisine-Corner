require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(express.json());
app.use(cors());
      
const URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
const MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="
app.get('/list/api',async(req,res)=>{
  try {const response=await axios.get(URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Referer": "https://www.swiggy.com/",
      "Accept": "application/json, text/plain, */*",
    }})
    console.log(response)
    res.json(response.data)
    
  } catch (error) {
    res.send(error)
  }
  
})
app.get('/menu/api/:resId',async(req,res)=>{
  const {resId}=req.params
  try {const response=await axios.get(MENU_URL+resId, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Referer": "https://www.swiggy.com/",
      "Accept": "application/json, text/plain, */*",
    }})
    console.log(response)
    res.json(response.data)
    
  } catch (error) {
    res.send(error)
  }
  
})
app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
