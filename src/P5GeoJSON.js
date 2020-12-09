// Globals for Convertign WGS Coordinates to Cartesian
let MercatorsProj =  proj4('EPSG:3785');
let toMiles = 0.000621;
let unitScale = 20; // meters per unit


//* Note -- normalizeModel is currently unused do to geojson objects currently
//*         being stateless. Maybe store offset on geojson json obj?

// Draws all Features inside the Given GeoJSON File
function DrawGeoJSON(p5, geojson, normalizeModel, transform, scale) {
    p5.push();

        // Apply Any User Translation
        if(transform.length > 0) {
            p5.translate(parseInt(transform[0]), parseInt(transform[1]));
        }

        // Move Grid Origin to Center of Canvas
        p5.translate((p5.width / 2), (p5.height / 2));

        // Flip Y Axis
        p5.scale(1.0, -1.0);

        // Apply Any User Scale
        if(scale.length > 0) {
            if(scale.length == 1) {
                p5.scale(parseFloat(scale[0]));
            } else {
                p5.scale(parseFloat(scale[0]), parseFloat(scale[1]));
            }
        }

        if(geojson.type == "FeatureCollection") {
            geojson.features.forEach(feature => {
                DrawFeature(p5, feature);
            });
        } else if(geojson.type == "Feature") {
            DrawFeature(p5, geojson);
        }

    p5.pop();
}

// Calls the Appropriate Draw Function Depending on the Type of the passed Feature
function DrawFeature(p5, feature, normalizeModel = false) {
 
    switch(feature.geometry.type) {
        case "Point":
            DrawPoint(p5,feature);
            break;
        case "LineString":
            DrawLineString(p5,feature);
            break;
        case "Polygon":
            DrawPolygon(p5,feature);
            break;
        case "MultiPolygon":
            DrawPolygon(p5, feature);
        default:
            break;
    }
}

// Draws a GeoJSON Point
function DrawPoint(p, feature, normalizeModel = false) {
    //console.log("Drawing Point!");

    // Get the Coordinates
    let coords = feature.geometry.coordinates;
    if(coords.length == 0) {
        return;
    }

    // Draw (X,Y) Point
    let pos = WGSToCartesian(coords);
    p.point(pos.x, pos.y); 
}

// Draws a GeoJSON LineString (via p5's unclosed polygon shape)
function DrawLineString(p, feature, normalizeModel = false) {
    //console.log("Drawing LineString!");
    
    // Get the Coordinates 
    let coords = feature.geometry.coordinates;
    if(coords.length == 0) {
        return;
    }

    p.beginShape();

        // Draw the Exterior Polygon Bounds
        let exteriorBounds = coords;
        for(let i = 0; i < exteriorBounds.length; ++i) {
            let vertPos = WGSToCartesian(exteriorBounds[i]);
            p.vertex(vertPos.x, vertPos.y);
        }

    
    p.endShape(); 
}

// Draws a GeoJSON PolyGon
function DrawPolygon(p, feature, normalizeModel = false, lines = false) {
    //console.log("Drawing Polygon!");

    // Get the Coordinates 
    let coords = feature.geometry.coordinates;
    if(coords.length == 0) {
        return;
    }

    if(feature.geometry.type == "MultiPolygon") {
        DrawMultiPolygon(p, coords);
    } else {
        p.beginShape();

            // Draw the Exterior Polygon Bounds
            let exteriorBounds = coords[0];
            for(let i = 0; i < exteriorBounds.length; ++i) {
                let vertPos = WGSToCartesian(exteriorBounds[i]);
                p.vertex(vertPos.x, vertPos.y);
            }

            // Draw the remaining interior polygon holes
            for(let i = 1; i < coords.length; ++i) {
                let interiorBounds = coords[i];
                p.beginContour();
                    for(let i = 0; i < interiorBounds.length; ++i) {
                        let vertPos = WGSToCartesian(interiorBounds[i]);
                        p.vertex(vertPos.x, vertPos.y);
                    }
                p.endContour();
            }
        
        p.endShape(p.CLOSE); 
    }
}

function DrawMultiPolygon(p, coords, normalizeModel = false ) {

    let polygons = coords;

    for(let polygon = 0; polygon < polygons.length; ++polygon) {
        let exteriorBounds = polygons[polygon][0];

        p.beginShape();

        for(let i = 0; i < exteriorBounds.length; ++i) {
            let vertPos = WGSToCartesian(exteriorBounds[i]);
            p.vertex(vertPos.x, vertPos.y);
        }

        p.endShape(p.CLOSE); 

    }

}

// Generates a Bounding Box for the GeoJSON Object
function GenerateGeoJSONBoundingBox(p5, feature, normalizeModel = false) {

    // Get the Coordinates 
    if(!feature || !feature.geometry) {
        return;
    }

    let coords = feature.geometry.coordinates;
    if(coords === undefined || coords.length == 0) {
        return;
    }

    // Find the Coord with the MinX/MinY values and the MaxX/MaxY Values
    let max = {
        x: -Number.MAX_VALUE,
        y: -Number.MAX_VALUE
    };
    let min = {
        x: Number.MAX_VALUE,
        y: Number.MAX_VALUE
    };


    if(feature.geometry.type == "MultiPolygon") {
        let polygons = coords;

        //console.log(exteriorBounds);
        for(let polygon = 0; polygon < polygons.length; ++polygon) {
            let exteriorBounds = polygons[polygon][0];
            for(let i = 0; i < exteriorBounds.length; ++i) {
                let vertPos = WGSToCartesian(exteriorBounds[i]);
                if(vertPos.x < min.x) {
                    min.x = vertPos.x;
                }
                if(vertPos.x > max.x) {
                    max.x = vertPos.x;
                }

                if(vertPos.y < min.y) {
                    min.y = vertPos.y;
                }
                if(vertPos.y > max.y) {
                    max.y = vertPos.y;
                }
            }
        }
    } else {

        let exteriorBounds = coords[0];

        //console.log(exteriorBounds);
        for(let i = 0; i < exteriorBounds.length; ++i) {
            let vertPos = WGSToCartesian(exteriorBounds[i]);
            if(vertPos.x < min.x) {
                min.x = vertPos.x;
            } else if(vertPos.x > max.x) {
                max.x = vertPos.x;
            }

            if(vertPos.y < min.y) {
                min.y = vertPos.y;
            } else if(vertPos.y > max.y) {
                max.y = vertPos.y;
            }
        }
    }

    min.x += (p5.width / 2);
    min.y = -(min.y - (p5.height / 2));


    max.x += (p5.width / 2);
    max.y = -(max.y - (p5.height / 2));

    let minX = Math.min(min.x, max.x);
    let maxX = Math.max(min.x, max.x);

    let minY = Math.min(min.y, max.y);
    let maxY = Math.max(min.y, max.y);

    min.x = minX;
    min.y = minY;

    max.x = maxX;
    max.y = maxY;

    return {
        min: min,
        max: max,
    };
    
}

// Checks if the Mouse is Hovering over a GeoJSON Object
function IsHovering(symbol) {
    let originalBB = symbol["BoundingBox"];
    
    if(originalBB) {

        let mX =  mouseX; // - (width / 2);
        let mY =  mouseY; // - (height / 2));

        let xTranslation = symbol["Translate"][0];
        let yTranslation = symbol["Translate"][1];
        
        let bb = {
            min: {
                x: originalBB.min.x + xTranslation,
                y: originalBB.min.y + yTranslation,
            },
            max: {
                x: originalBB.max.x + xTranslation,
                y: originalBB.max.y + yTranslation,
            }
        };


        if(mouseIsPressed) {
            console.log(mX, mY);
            console.log(bb);
        }

        let xTest = (mX <= Math.max(bb.max.x, bb.min.x) && mX >= Math.min(bb.max.x, bb.min.x));
        let yTest = (mY <= Math.max(bb.max.y, bb.min.y) && mY >= Math.min(bb.max.y, bb.min.y));

        return ( xTest && yTest );
    }

    return false;
}

// Converts WGS Long/Lat Coords to X/Y Coords via Mercator Projection
function WGSToCartesian(point) {
    let projCoord = proj4(MercatorsProj, point);

    let scaledCoord = {
        x: (projCoord[0] * toMiles) / unitScale,
        y: (projCoord[1] * toMiles) / unitScale,
    }

    return scaledCoord;
}

function PositiveCasesToColor(x) {

    x /= 8;
    x = Math.ceil(x);

    if(x >= 0 && x <= 25) {
        return "#FFFBDC";
    }
    
    if(x > 25 && x <= 50) {
        return "#FFEDB8";
    }

    if(x > 50 && x <= 75) {
        return "#FFDD94";
    }

    if(x > 75 && x <= 100) {
        return "#FBBF69";
    }

    if(x > 100 && x <= 150) {
        return "#F5A057";
    }

    if(x > 150 && x <= 200) {
        return "#ED6942";
    }

    if(x > 200 && x <= 250) {
        return "#D73534";
    }

    if(x > 250 && x <= 500) {
        return "#BF1B3E";
    }

    if(x > 500 && x <= 1000) {
        return "#952742";
    }

    if(x > 1000) {
        return "#800600";
    }
    
    return "#FFFFFF";
}