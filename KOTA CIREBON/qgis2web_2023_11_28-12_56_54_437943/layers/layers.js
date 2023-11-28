var wms_layers = [];


        var lyr_GoogleMapsSateliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google (Maps) Satelite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMapsSatelite_2 = new ol.layer.Tile({
            'title': 'Google Maps Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IndexjumlahpeternakdiKotaCirebon_3 = new ol.format.GeoJSON();
var features_IndexjumlahpeternakdiKotaCirebon_3 = format_IndexjumlahpeternakdiKotaCirebon_3.readFeatures(json_IndexjumlahpeternakdiKotaCirebon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndexjumlahpeternakdiKotaCirebon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndexjumlahpeternakdiKotaCirebon_3.addFeatures(features_IndexjumlahpeternakdiKotaCirebon_3);
var lyr_IndexjumlahpeternakdiKotaCirebon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndexjumlahpeternakdiKotaCirebon_3, 
                style: style_IndexjumlahpeternakdiKotaCirebon_3,
                interactive: true,
    title: 'Index jumlah peternak di Kota Cirebon<br />\
    <img src="styles/legend/IndexjumlahpeternakdiKotaCirebon_3_0.png" /> 0 - 9<br />\
    <img src="styles/legend/IndexjumlahpeternakdiKotaCirebon_3_1.png" /> 9 - 10<br />\
    <img src="styles/legend/IndexjumlahpeternakdiKotaCirebon_3_2.png" /> 10 - 22<br />\
    <img src="styles/legend/IndexjumlahpeternakdiKotaCirebon_3_3.png" /> 22 - 159<br />\
    <img src="styles/legend/IndexjumlahpeternakdiKotaCirebon_3_4.png" /> 159 - 194<br />'
        });
var format_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4 = new ol.format.GeoJSON();
var features_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4 = format_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.readFeatures(json_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.addFeatures(features_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4);
var lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4, 
                style: style_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4,
                interactive: true,
    title: 'Index jumlah orang yang terkena TBC di Kabupaten Cirebon<br />\
    <img src="styles/legend/IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4_0.png" /> 3 - 10<br />\
    <img src="styles/legend/IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4_1.png" /> 10 - 14<br />\
    <img src="styles/legend/IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4_2.png" /> 14 - 19<br />\
    <img src="styles/legend/IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4_3.png" /> 19 - 22<br />\
    <img src="styles/legend/IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4_4.png" /> 22 - 43<br />'
        });
var format_SUNGAI_LN_25K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_5 = format_SUNGAI_LN_25K_5.readFeatures(json_SUNGAI_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_5.addFeatures(features_SUNGAI_LN_25K_5);
var lyr_SUNGAI_LN_25K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_25K_5, 
                style: style_SUNGAI_LN_25K_5,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_5.png" /> SUNGAI_LN_25K'
            });
var format_PEMERINTAHAN_PT_25K_6 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_6 = format_PEMERINTAHAN_PT_25K_6.readFeatures(json_PEMERINTAHAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_6.addFeatures(features_PEMERINTAHAN_PT_25K_6);
var lyr_PEMERINTAHAN_PT_25K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_25K_6, 
                style: style_PEMERINTAHAN_PT_25K_6,
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_0.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_1.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_2.png" /> Kantor Lurah<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_3.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_4.png" /> Kantor Wali Kota<br />'
        });

lyr_GoogleMapsSateliteHybrid_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_GoogleMapsSatelite_2.setVisible(false);lyr_IndexjumlahpeternakdiKotaCirebon_3.setVisible(true);lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.setVisible(true);lyr_SUNGAI_LN_25K_5.setVisible(true);lyr_PEMERINTAHAN_PT_25K_6.setVisible(true);
var layersList = [lyr_GoogleMapsSateliteHybrid_0,lyr_OpenStreetMap_1,lyr_GoogleMapsSatelite_2,lyr_IndexjumlahpeternakdiKotaCirebon_3,lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4,lyr_SUNGAI_LN_25K_5,lyr_PEMERINTAHAN_PT_25K_6];
lyr_IndexjumlahpeternakdiKotaCirebon_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'jumlah_peternak_di_kota_cirebon_id': 'jumlah_peternak_di_kota_cirebon_id', 'jumlah_peternak_di_kota_cirebon_kode_provinsi': 'jumlah_peternak_di_kota_cirebon_kode_provinsi', 'jumlah_peternak_di_kota_cirebon_nama_provinsi': 'jumlah_peternak_di_kota_cirebon_nama_provinsi', 'jumlah_peternak_di_kota_cirebon_kode_kabupaten_kota': 'jumlah_peternak_di_kota_cirebon_kode_kabupaten_kota', 'jumlah_peternak_di_kota_cirebon_nama_kabupaten_kota': 'jumlah_peternak_di_kota_cirebon_nama_kabupaten_kota', 'jumlah_peternak_di_kota_cirebon_bps_kode_kecamatan': 'jumlah_peternak_di_kota_cirebon_bps_kode_kecamatan', 'jumlah_peternak_di_kota_cirebon_kemendagri_kode_kecamatan': 'jumlah_peternak_di_kota_cirebon_kemendagri_kode_kecamatan', 'jumlah_peternak_di_kota_cirebon_kemendagri_nama_kecamatan': 'jumlah_peternak_di_kota_cirebon_kemendagri_nama_kecamatan', 'jumlah_peternak_di_kota_cirebon_jumlah_peternak': 'jumlah_peternak_di_kota_cirebon_jumlah_peternak', 'jumlah_peternak_di_kota_cirebon_satuan': 'jumlah_peternak_di_kota_cirebon_satuan', 'jumlah_peternak_di_kota_cirebon_tahun': 'jumlah_peternak_di_kota_cirebon_tahun', });
lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun', });
lyr_SUNGAI_LN_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_IndexjumlahpeternakdiKotaCirebon_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_id': 'Range', 'jumlah_peternak_di_kota_cirebon_kode_provinsi': 'Range', 'jumlah_peternak_di_kota_cirebon_nama_provinsi': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_kode_kabupaten_kota': 'Range', 'jumlah_peternak_di_kota_cirebon_nama_kabupaten_kota': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_bps_kode_kecamatan': 'Range', 'jumlah_peternak_di_kota_cirebon_kemendagri_kode_kecamatan': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_kemendagri_nama_kecamatan': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_jumlah_peternak': 'Range', 'jumlah_peternak_di_kota_cirebon_satuan': 'TextEdit', 'jumlah_peternak_di_kota_cirebon_tahun': 'Range', });
lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kecamatan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'Range', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'TextEdit', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'Range', });
lyr_SUNGAI_LN_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_IndexjumlahpeternakdiKotaCirebon_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label', 'WIADKC': 'no label', 'WADMKK': 'inline label', 'WIADKK': 'no label', 'WADMPR': 'inline label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'jumlah_peternak_di_kota_cirebon_id': 'no label', 'jumlah_peternak_di_kota_cirebon_kode_provinsi': 'no label', 'jumlah_peternak_di_kota_cirebon_nama_provinsi': 'no label', 'jumlah_peternak_di_kota_cirebon_kode_kabupaten_kota': 'no label', 'jumlah_peternak_di_kota_cirebon_nama_kabupaten_kota': 'no label', 'jumlah_peternak_di_kota_cirebon_bps_kode_kecamatan': 'no label', 'jumlah_peternak_di_kota_cirebon_kemendagri_kode_kecamatan': 'no label', 'jumlah_peternak_di_kota_cirebon_kemendagri_nama_kecamatan': 'no label', 'jumlah_peternak_di_kota_cirebon_jumlah_peternak': 'no label', 'jumlah_peternak_di_kota_cirebon_satuan': 'no label', 'jumlah_peternak_di_kota_cirebon_tahun': 'no label', });
lyr_IndexjumlahorangyangterkenaTBCdiKabupatenCirebon_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_id': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kode_provinsi': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_nama_provinsi': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kabupaten_kota': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kabupaten_kota': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_kode_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_bps_nama_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_kode_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_kemendagri_nama_kecamatan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_puskesmas': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_jumlah_kasus_tbc': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_satuan': 'no label', 'jmlh_kss_tbrklss_brdsrkn_jk_kcmtn_psksms_d_kbptn_crbn_tahun': 'no label', });
lyr_SUNGAI_LN_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'inline label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_25K_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});