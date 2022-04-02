import GoogleMapReact from "google-map-react";

const DEEFAULT_CENTER = {
	lat: 43.6425569,
	lng: -9.4073126,				
};
const DEFAULT_ZOOM = 3;

const GoogleMap = () => {
    return (
		<div>
		<h2 id="quote-map">
			"If we were meant to stay in one place, we’d have roots instead of feet." -  
			<span id="quote-map-author"> Rachel WOLCHIN</span>
		</h2>
		<div style={{ height: '578px', width: '100%' }}>
			<GoogleMapReact
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => {
					const kmzSrc = "http://anthony.faraut.free.fr/voyages.kmz?timestamp="+new Date().getTime();
					
					new maps.KmlLayer(kmzSrc, {
						map: map
					});
				}}			
				bootstrapURLKeys={{ key: "AIzaSyAqVww8gmd7PoZUnASChHsOkFFDgcVWhi0" }}
				defaultCenter={DEEFAULT_CENTER}
				defaultZoom={DEFAULT_ZOOM}
			>
			</GoogleMapReact>
		</div>
	  </div>
    );
}
export default GoogleMap;