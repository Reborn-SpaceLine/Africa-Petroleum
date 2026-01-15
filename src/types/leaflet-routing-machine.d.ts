/**
 * Déclarations TypeScript pour leaflet-routing-machine
 */
import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Routing {
    interface RoutingControlOptions {
      waypoints: L.LatLng[];
      router?: any;
      plan?: any;
      geocoder?: any;
      routeWhileDragging?: boolean;
      routeWhileDraggingOptions?: any;
      waypointMode?: string;
      reverseWaypoints?: boolean;
      lineOptions?: {
        styles?: Array<{
          color?: string;
          weight?: number;
          opacity?: number;
        }>;
      };
      altLineOptions?: any;
      showAlternatives?: boolean;
      alternative?: boolean;
      createMarker?: (waypointIndex: number, waypoint: L.LatLng, numberOfWaypoints: number) => L.Marker | null;
      addWaypoints?: boolean;
      draggableWaypoints?: boolean;
      fitSelectedRoutes?: boolean | string;
      showSteps?: boolean;
      language?: string;
      units?: string;
      containerClassName?: string;
      summaryTemplate?: string;
      stepTemplate?: string;
      itineraryClassName?: string;
      alternativeClassName?: string;
      minimizedClassName?: string;
      collapsibleClassName?: string;
      collapseBtnClassName?: string;
      closeBtnClassName?: string;
      hide?: boolean;
      autoRoute?: boolean;
      useZoomParameter?: boolean;
      useHints?: boolean;
    }

    class Control extends L.Control {
      constructor(options?: RoutingControlOptions);
      getWaypoints(): L.LatLng[];
      setWaypoints(waypoints: L.LatLng[]): this;
      spliceWaypoints(index: number, waypointsToRemove: number, ...waypoints: L.LatLng[]): L.LatLng[];
      getPlan(): any;
      getRouter(): any;
      on(event: string, fn: Function, context?: any): this;
      off(event: string, fn?: Function, context?: any): this;
    }

    function control(options?: RoutingControlOptions): Control;
  }
}





