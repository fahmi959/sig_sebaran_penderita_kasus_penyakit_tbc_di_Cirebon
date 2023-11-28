var wms_layers = [];


        var lyr_GoogleMapsSatelite_0 = new ol.layer.Tile({
            'title': 'Google Maps Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMININSTRASIKABCRBN_1 = new ol.format.GeoJSON();
var features_ADMININSTRASIKABCRBN_1 = format_ADMININSTRASIKABCRBN_1.readFeatures(json_ADMININSTRASIKABCRBN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMININSTRASIKABCRBN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMININSTRASIKABCRBN_1.addFeatures(features_ADMININSTRASIKABCRBN_1);
var lyr_ADMININSTRASIKABCRBN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMININSTRASIKABCRBN_1, 
                style: style_ADMININSTRASIKABCRBN_1,
                interactive: true,
    title: 'ADMININSTRASI KAB CRBN<br />\
    <img src="styles/legend/ADMININSTRASIKABCRBN_1_0.png" /> 3 - 10<br />\
    <img src="styles/legend/ADMININSTRASIKABCRBN_1_1.png" /> 10 - 14<br />\
    <img src="styles/legend/ADMININSTRASIKABCRBN_1_2.png" /> 14 - 19<br />\
    <img src="styles/legend/ADMININSTRASIKABCRBN_1_3.png" /> 19 - 22<br />\
    <img src="styles/legend/ADMININSTRASIKABCRBN_1_4.png" /> 22 - 43<br />'
        });
var format_GARISBATASADMKABCRBN_2 = new ol.format.GeoJSON();
var features_GARISBATASADMKABCRBN_2 = format_GARISBATASADMKABCRBN_2.readFeatures(json_GARISBATASADMKABCRBN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISBATASADMKABCRBN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISBATASADMKABCRBN_2.addFeatures(features_GARISBATASADMKABCRBN_2);
var lyr_GARISBATASADMKABCRBN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GARISBATASADMKABCRBN_2, 
                style: style_GARISBATASADMKABCRBN_2,
                interactive: true,
                title: '<img src="styles/legend/GARISBATASADMKABCRBN_2.png" /> GARIS BATAS ADM KAB CRBN'
            });

lyr_GoogleMapsSatelite_0.setVisible(false);lyr_ADMININSTRASIKABCRBN_1.setVisible(true);lyr_GARISBATASADMKABCRBN_2.setVisible(true);
var layersList = [lyr_GoogleMapsSatelite_0,lyr_ADMININSTRASIKABCRBN_1,lyr_GARISBATASADMKABCRBN_2];
lyr_ADMININSTRASIKABCRBN_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jenis_kelamin': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jenis_kelamin', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun', });
lyr_GARISBATASADMKABCRBN_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMININSTRASIKABCRBN_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jenis_kelamin': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'Range', });
lyr_GARISBATASADMKABCRBN_2.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMININSTRASIKABCRBN_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jenis_kelamin': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'no label', });
lyr_GARISBATASADMKABCRBN_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_GARISBATASADMKABCRBN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});