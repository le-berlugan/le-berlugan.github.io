import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// togeojson doesn't have perfect TS types for direct import in all setups; use any import
import * as togeojson from "togeojson";

const DEEFAULT_CENTER = {
	lat: 43.6425569,
	lng: -9.4073126,
};
const DEFAULT_ZOOM = 3;

const mapId = "1lsKKbKLBp7SbG3Ehz2NL1nwTOdV3e_0";
const kmlUrl = `https://www.google.com/maps/d/kml?mid=${mapId}&forcekml=1`;

// Small helper component to load KML -> GeoJSON and add to map
const KmlLoader: React.FC<{ url: string; onError: () => void }> = ({ url, onError }) => {
	const map = useMap();
	useEffect(() => {
		let mounted = true;
		const fetchAndAdd = async () => {
			try {
				const res = await fetch(url);
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const text = await res.text();
				const parser = new DOMParser();
				const kmlDom = parser.parseFromString(text, "text/xml");
				// togeojson.kml expects a Document
				// @ts-ignore
				const geojson = togeojson.kml(kmlDom);
				if (!mounted) return;

				// Use default OSM/Leaflet marker icons for pins (fallback)
				// Create a custom colored SVG marker using the requested hex color.
				// This avoids external image dependencies and works with any color.
								const createColoredIcon = (hexColor: string) => {
										// Larger SVG so marker appears bigger on the map
															const svg = `<?xml version="1.0" encoding="UTF-8"?>
					<svg xmlns='http://www.w3.org/2000/svg' width='36' height='58' viewBox='0 0 24 24'>
						<path fill='${hexColor}' stroke='#000000' stroke-width='0.8' stroke-opacity='0.9' d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'/>
						<circle cx='12' cy='9' r='2.5' fill='#ffffff' opacity='0.9' stroke='#000000' stroke-width='0.6' stroke-opacity='0.9'/>
					</svg>`;
										const svgUrl = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
										return L.icon({
												iconUrl: svgUrl,
												iconRetinaUrl: svgUrl,
												iconSize: [36, 58],
												iconAnchor: [18, 58],
												popupAnchor: [1, -50],
												// shadowUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png',
												// shadowSize: [58, 58]
										});
								};

				// Use your requested color #009688
				const defaultIcon = createColoredIcon('#009688');

				const layer = L.geoJSON(geojson as any, {
					pointToLayer: (feature: any, latlng: any) => {
						return L.marker(latlng, { icon: defaultIcon });
					}
				});
				layer.addTo(map);
				// fit bounds if possible
				try {
					const bounds = layer.getBounds();
					if (bounds.isValid()) map.fitBounds(bounds);
				} catch (e) {
					// ignore
				}
			} catch (err) {
				// CORS or permissions may block fetching the KML; notify parent
				// eslint-disable-next-line no-console
				console.error("Failed to load/parse KML:", err);
				onError();
			}
		};
		fetchAndAdd();
		return () => {
			mounted = false;
		};
	}, [url, map, onError]);
	return null;
};

const GoogleMap: React.FC = () => {
	const [kmlError, setKmlError] = useState(false);

	return (
		<div>
			<h2 id="quote-map">
				"If we were meant to stay in one place, we’d have roots instead of feet." -  
				<span id="quote-map-author"> Rachel WOLCHIN</span>
			</h2>

			<div style={{ height: "578px", width: "100%" }}>
				<MapContainer center={[DEEFAULT_CENTER.lat, DEEFAULT_CENTER.lng]} zoom={DEFAULT_ZOOM} style={{ height: "100%", width: "100%" }}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{!kmlError && <KmlLoader url={kmlUrl} onError={() => setKmlError(true)} />}
				</MapContainer>
			</div>

			{kmlError && (
				<p>
					Impossible de charger la couche KML (la carte peut ne pas être publique ou bloquée par CORS). Vous pouvez
					consulter la carte directement sur My Maps :{' '}
					<a href={`https://www.google.com/maps/d/viewer?mid=${mapId}`} target="_blank" rel="noopener noreferrer">
						Voir la carte sur Google My Maps
					</a>
					.
				</p>
			)}
		</div>
	);
};

export default GoogleMap;