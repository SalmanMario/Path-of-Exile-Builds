import { Route, Routes } from "react-router-dom";
import { route, routes } from "./routing";
import { Home } from "../pages/Home";
import { Legion } from "../pages/leagues/Legion";
import { Metamorph } from "../pages/leagues/Metamorph";
import { Delirium } from "../pages/leagues/Delirium";
import { Echoes } from "../pages/leagues/Echoes";
import { Ultimatum } from "../pages/leagues/Ultimatum";
import { Expedition } from "../pages/leagues/Expedition";
import { Siege } from "../pages/leagues/Siege";
import { Sentinel } from "../pages/leagues/Sentinel";
import { Kalandra } from "../pages/leagues/Kalandra";
import { Sanctum } from "../pages/leagues/Sanctum";
import { Crucible } from "../pages/leagues/Crucible";
import { Trials } from "../pages/leagues/Trials";
import { Harvest } from "../pages/leagues/Harvest";

export function Router() {
  return (
    <Routes>
      <Route path={route(routes.home)} element={<Home />} />
      <Route path={route(routes.legion)} element={<Legion />} />
      <Route path={route(routes.metamorph)} element={<Metamorph />} />
      <Route path={route(routes.delirium)} element={<Delirium />} />
      <Route path={route(routes.echoes)} element={<Echoes />} />
      <Route path={route(routes.harvest)} element={<Harvest />} />
      <Route path={route(routes.ultimatum)} element={<Ultimatum />} />
      <Route path={route(routes.expedition)} element={<Expedition />} />
      <Route path={route(routes.siege)} element={<Siege />} />
      <Route path={route(routes.sentinel)} element={<Sentinel />} />
      <Route path={route(routes.kalandra)} element={<Kalandra />} />
      <Route path={route(routes.sanctum)} element={<Sanctum />} />
      <Route path={route(routes.crucible)} element={<Crucible />} />
      <Route path={route(routes.trials)} element={<Trials />} />
    </Routes>
  );
}
