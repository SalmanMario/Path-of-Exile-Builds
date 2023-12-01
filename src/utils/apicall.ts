import { Build } from "../models/Build";
import { League } from "../models/League";
import axiosInstance, { wrapAxiosCall } from "../utils/utilsAxios";

/**
 * Get all leagues information
 */
export function getLeagues() {
  return wrapAxiosCall<League[]>(axiosInstance.get("/leagues"));
}

/**
 * Get all Legion builds
 */
export function getLegion() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Legion"));
}

/**
 * Get all Metamorph builds
 */
export function getMetamorph() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Metamorph"));
}

/**
 * Get all Delirium builds
 */
export function getDelirium() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Delirium"));
}

/**
 * Get all Harvest builds
 */
export function getHarvest() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Harvest"));
}

/**
 * Get all Echoes builds
 */
export function getEchoes() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Echoes"));
}

/**
 * Get all Ultimatum builds
 */
export function getUltimatum() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Ultimatum"));
}

/**
 * Get all Expedition builds
 */
export function getExpedition() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Expedition"));
}

/**
 * Get all Siege builds
 */
export function getSiege() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Siege"));
}

/**
 * Get all Sentinel builds
 */
export function getSentinel() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Sentinel"));
}

/**
 * Get all Kalandra builds
 */
export function getKalandra() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Kalandra"));
}

/**
 * Get all Sanctum builds
 */
export function getSanctum() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Sanctum"));
}

/**
 * Get all Crucible builds
 */
export function getCrucible() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Crucible"));
}

/**
 * Get all Ancestor builds
 */
export function getAncestor() {
  return wrapAxiosCall<Build[]>(axiosInstance.get("/builds/Ancestor"));
}
