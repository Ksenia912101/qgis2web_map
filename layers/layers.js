var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_Karasevolab_1_2 = new ol.format.GeoJSON();
var features_Karasevolab_1_2 = format_Karasevolab_1_2.readFeatures(json_Karasevolab_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karasevolab_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karasevolab_1_2.addFeatures(features_Karasevolab_1_2);
var lyr_Karasevolab_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karasevolab_1_2, 
                style: style_Karasevolab_1_2,
                popuplayertitle: 'Karasevo — lab_1',
                interactive: false,
                title: '<img src="styles/legend/Karasevolab_1_2.png" /> Karasevo — lab_1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_building1building_4 = new ol.format.GeoJSON();
var features_building1building_4 = format_building1building_4.readFeatures(json_building1building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building1building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building1building_4.addFeatures(features_building1building_4);
var lyr_building1building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building1building_4, 
                style: style_building1building_4,
                popuplayertitle: 'building1 — building',
                interactive: true,
                title: '<img src="styles/legend/building1building_4.png" /> building1 — building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_Karasevolab_1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_building1building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_Karasevolab_1_2,lyr_building_3,lyr_building1building_4,lyr_highway_5,lyr_highway_6];
lyr_Karasevolab_1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'source:addr': 'source:addr', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_building1building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'source:addr': 'source:addr', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', });
lyr_Karasevolab_1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:city': '', 'source:addr': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', });
lyr_building1building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:city': 'TextEdit', 'source:addr': 'TextEdit', 'name': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'ref': '', 'name:ru': '', 'name:en': '', 'name': '', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'ref': '', 'name:ru': '', 'name:en': '', 'name': '', });
lyr_Karasevolab_1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'source:addr': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr_building1building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'source:addr': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', });
lyr_highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});