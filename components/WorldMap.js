import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function WorldMap({ highlightedCountries = [] }) {
    const highlighted = new Set(highlightedCountries.map(String))

    return (
        <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 145 }}
            style={{ width: "100%", height: "auto" }}
        >
            <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={highlighted.has(String(geo.id)) ? "#a855f7" : "transparent"}
                            stroke="#ffffff"
                            strokeWidth={0.3}
                            style={{
                                default: { outline: "none", transition: "fill 0.2s ease" },
                                hover:   { outline: "none" },
                                pressed: { outline: "none" },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}
