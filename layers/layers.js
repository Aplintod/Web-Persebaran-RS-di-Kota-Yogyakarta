var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: false,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> <br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> 0<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Baciro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Bangunharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Banguntapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Bausasran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Bener<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Brontokusuman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Bumijo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Caturtunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Cokrodiningratan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Demangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Gedongkiwo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Giwangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Gowongan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Jagalan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Kadiraten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Karangwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Kepatihan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Klitren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Kotabaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Kricak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Mantrijero<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Mujamuju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Ngamprilan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Ngestiharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Ngurasan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Notorrajan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Pandeyan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Prawirodirjan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Prenggan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Purbayan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Ranembahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Ranggungharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Ratangruluhan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Ratehan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Rejowinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Ringgokusuman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Sinduadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Singosaren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Smaki<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Sosromenduran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Surokarsan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Surosutan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Suryatmajan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Suryodiningrata<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Tahunan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Tamanan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Tegalranggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Tegalrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Terban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Tirtonirmolo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Trihanggo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Wapungboto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Wirobrajan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Wirogunan<br />' });
var format_JoinDataRSYogyakartaPopUp_2 = new ol.format.GeoJSON();
var features_JoinDataRSYogyakartaPopUp_2 = format_JoinDataRSYogyakartaPopUp_2.readFeatures(json_JoinDataRSYogyakartaPopUp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JoinDataRSYogyakartaPopUp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JoinDataRSYogyakartaPopUp_2.addFeatures(features_JoinDataRSYogyakartaPopUp_2);
var lyr_JoinDataRSYogyakartaPopUp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JoinDataRSYogyakartaPopUp_2, 
                style: style_JoinDataRSYogyakartaPopUp_2,
                popuplayertitle: 'Join Data RS Yogyakarta (Pop Up)',
                interactive: true,
    title: 'Join Data RS Yogyakarta (Pop Up)<br />\
    <img src="styles/legend/JoinDataRSYogyakartaPopUp_2_0.png" /> A<br />\
    <img src="styles/legend/JoinDataRSYogyakartaPopUp_2_1.png" /> B<br />\
    <img src="styles/legend/JoinDataRSYogyakartaPopUp_2_2.png" /> C<br />\
    <img src="styles/legend/JoinDataRSYogyakartaPopUp_2_3.png" /> D<br />' });
var format_JoinDataRSYogyakarta_3 = new ol.format.GeoJSON();
var features_JoinDataRSYogyakarta_3 = format_JoinDataRSYogyakarta_3.readFeatures(json_JoinDataRSYogyakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JoinDataRSYogyakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JoinDataRSYogyakarta_3.addFeatures(features_JoinDataRSYogyakarta_3);
var lyr_JoinDataRSYogyakarta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JoinDataRSYogyakarta_3, 
                style: style_JoinDataRSYogyakarta_3,
                popuplayertitle: 'Join Data RS Yogyakarta',
                interactive: false,
    title: 'Join Data RS Yogyakarta<br />\
    <img src="styles/legend/JoinDataRSYogyakarta_3_0.png" /> A<br />\
    <img src="styles/legend/JoinDataRSYogyakarta_3_1.png" /> B<br />\
    <img src="styles/legend/JoinDataRSYogyakarta_3_2.png" /> C<br />\
    <img src="styles/legend/JoinDataRSYogyakarta_3_3.png" /> D<br />' });

lyr_OSM_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_JoinDataRSYogyakartaPopUp_2.setVisible(true);lyr_JoinDataRSYogyakarta_3.setVisible(true);
var layersList = [lyr_OSM_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_JoinDataRSYogyakartaPopUp_2,lyr_JoinDataRSYogyakarta_3];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JoinDataRSYogyakartaPopUp_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'KELAS_RS': 'KELAS_RS', 'VVIP': 'VVIP', 'VIP': 'VIP', 'KELAS_I': 'KELAS_I', 'KELAS_II': 'KELAS_II', 'KEALS_III': 'KEALS_III', 'DOKTER': 'DOKTER', });
lyr_JoinDataRSYogyakarta_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'KELAS_RS': 'KELAS_RS', 'VVIP': 'VVIP', 'VIP': 'VIP', 'KELAS_I': 'KELAS_I', 'KELAS_II': 'KELAS_II', 'KEALS_III': 'KEALS_III', 'DOKTER': 'DOKTER', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JoinDataRSYogyakartaPopUp_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'KELAS_RS': 'TextEdit', 'VVIP': 'TextEdit', 'VIP': 'TextEdit', 'KELAS_I': 'TextEdit', 'KELAS_II': 'TextEdit', 'KEALS_III': 'TextEdit', 'DOKTER': 'TextEdit', });
lyr_JoinDataRSYogyakarta_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'KELAS_RS': 'TextEdit', 'VVIP': 'TextEdit', 'VIP': 'TextEdit', 'KELAS_I': 'TextEdit', 'KELAS_II': 'TextEdit', 'KEALS_III': 'TextEdit', 'DOKTER': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_JoinDataRSYogyakartaPopUp_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'REMARK': 'inline label - visible with data', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPRST': 'hidden field', 'JPLYRS': 'hidden field', 'KELAS_RS': 'inline label - visible with data', 'VVIP': 'inline label - visible with data', 'VIP': 'inline label - visible with data', 'KELAS_I': 'inline label - visible with data', 'KELAS_II': 'inline label - visible with data', 'KEALS_III': 'inline label - visible with data', 'DOKTER': 'inline label - visible with data', });
lyr_JoinDataRSYogyakarta_3.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPRST': 'hidden field', 'JPLYRS': 'hidden field', 'KELAS_RS': 'hidden field', 'VVIP': 'hidden field', 'VIP': 'hidden field', 'KELAS_I': 'hidden field', 'KELAS_II': 'hidden field', 'KEALS_III': 'hidden field', 'DOKTER': 'hidden field', });
lyr_JoinDataRSYogyakarta_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});