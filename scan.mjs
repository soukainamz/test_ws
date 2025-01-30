// const WebSocketService = require('./WebSocketService.mjs');
import WebSocketService from './WebSocketService.mjs';
const wsService = new WebSocketService("wss://datastream.solanatracker.io/trial-soukiana3101");

// 1. Latest Tokens/Pools
wsService.joinRoom("latest");
wsService.on("latest", (data) => {
  console.log(new Date().toISOString());
  console.log("Latest token/pool update:", data);
});